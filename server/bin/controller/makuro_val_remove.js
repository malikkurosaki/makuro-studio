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

const listNya = content.match(/(?=final).*(?=\=)/g).map(e => e.split(' ')[1])

prompts({
    type: 'multiselect',
    name: 'pilihan',
    message: 'pilih val yang akan dihapus',
    choices: [
        ...listNya.map(e => {
            return {
                title: _.capitalize(e.replace('.dart', '')),
                value: e
            }
        })
    ]
}).then(({ pilihan }) => {
    if(_.isEmpty(pilihan)){
        console.log("tidak ada val".red);
        return;
    }
    
    pilihan.forEach(e => {
        let hasil = content.replace(/.*final.*/, '');
        fs.writeFileSync(targetFile, beautify(hasil), "utf8");
    })
    console.log("Val berhasil dihapus".green);
})