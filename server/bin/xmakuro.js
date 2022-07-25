#!/usr/bin/env node

const prompts = require('prompts');
const fs = require('fs');
const path = require('path');
const dirCon = fs.readdirSync(path.join(__dirname, './controller'));
const _ = require('lodash')
const execSync = require('child_process').execSync
const colors = require('colors');
const beautify = require('js-beautify');

prompts({
    type: 'select',
    name: 'pilihan',
    message: 'Pilih menu',
    choices: [
        {
            title: 'Create Menu',
            value: 'add_menu'
        },
        {
            title: 'Remove Menu',
            value: 'remove_menu'
        },
        ..._.isEmpty(dirCon) ? [] : dirCon.map(e => {
            return {
                title: _.capitalize(e.replace('.js', '')),
                value: e
            }
        })
    ]
}).then(({ pilihan }) => {
    if(pilihan == "add_menu"){
        prompts({
            "type": "text",
            "name": "menu",
            "message": "Nama menu"
        }).then(({ menu }) => {
            if(menu == ""){
                console.log("Nama menu tidak boleh kosong".red);
                return;
            }

            const _controllerPath = path.join(__dirname, `./controller/${_.snakeCase(menu)}.js`);
            if (!fs.existsSync(_controllerPath)) {
                let template = 
                `
                #!/usr/bin/env node
                const execSync = require('child_process').execSync
                const prompts = require('prompts');
                const path = require('path');
                const fs = require('fs');
                const beautify = require('js-beautify');
                const _ = require('lodash');
                const colors = require('colors');
                `
                fs.writeFileSync(_controllerPath, beautify(template), "utf8");
            }
            console.log("Menu berhasil ditambahkan".green);
        })
    }

    else if(pilihan == "remove_menu"){
        const dirMenu = fs.readdirSync(path.join(__dirname, './controller'));
        prompts({
            type: "multiselect",
            name: "pilihan",
            message: "pilih meny yang akan dihapus",
            choices: [
                ...dirMenu.map(e => {
                    return {
                        title: _.capitalize(e.replace('.js', '')),
                        value: e
                    }
                })
            ]
        }).then(({ pilihan }) => {
            if(_.isEmpty(pilihan)){
                console.log("tidak ada menu".red);
                return;
            }
            
            for (let pilih of pilihan) {
                fs.unlinkSync(path.join(__dirname, `./controller/${pilih}`))
            }
            console.log("berhasil".green)
        })
    } else if (pilihan == undefined) {
        console.log("Ok Bye ..".yellow)
    }else {
        execSync(`node ${pilihan}`, {stdio: "inherit", cwd: path.join(__dirname, './controller')})
    }
    
})