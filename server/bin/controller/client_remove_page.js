#!/usr/bin/env node
const execSync = require('child_process').execSync
const prompts = require('prompts');
const path = require('path');
const fs = require('fs');
const _ = require('lodash');
const colors = require('colors');

const dirPage = fs.readdirSync(path.join(__dirname, './../../../client/lib/makuro_pages'));

if(_.isEmpty(dirPage)){
    console.log("tidak ada page".red);
    return;
}

prompts({
    type: 'multiselect',
    name: 'pilihan',
    message: 'pilih page yang akan dihapus',
    choices: [
        ...dirPage.map(e => {
            return {
                title: _.capitalize(e.replace('.dart', '')),
                value: e
            }
        }
        )
    ]
}).then(({ pilihan }) => {
    pilihan.forEach(e => {
        const _controllerPath = path.join(__dirname, `./../../../client/lib/makuro_pages/${e}`);
        fs.unlinkSync(_controllerPath);
    }
    )
    console.log("Page berhasil dihapus".green);
})