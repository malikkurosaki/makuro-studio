#!/usr/bin/env node

const execSync = require('child_process').execSync
const prompts = require('prompts');
const path = require('path');
const fs = require('fs');
const beautify = require('js-beautify');
const _ = require('lodash');
const colors = require('colors');

const targetFile = path.join(__dirname, './../../../client/lib/utils/makuro_val.dart');
const content = fs.readFileSync(targetFile, 'utf8').toString();

prompts({
    type: 'text',
    name: 'name',
    message: 'Nama Val',
    initial: 'index'
}).then(({ name }) => {
    if (name == undefined || name == "") {
        console.log("nama val tidak boleh kosong");
        return;
    }

    if(!`${name}`.includes(',')){
        console.log("nama val , type data | contoh : nama_val,{}".red);
        return;
    }

    let custom = `${name}`.split(',');

    let template = 
    `
    // part of generate , do not edit
    static final ${_.snakeCase(custom[0]).replace(' ', '')} = ${custom[1]}.val('${_.snakeCase(custom[0]).replace(' ', '')}').obs;
    `

    let result = content.replace(/.*part.*/g, template);

    fs.writeFileSync(targetFile, beautify(result), "utf8");

    console.log("Val berhasil ditambahkan".green);

})