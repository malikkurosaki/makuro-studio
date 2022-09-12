#!/usr/bin/env node

let listFunc = [addMenu, buildWeb, commandClient, commandServer, configGenerate, generateMenu, generatePageV2, gitPush, gitPushForce, imageGenerate, pageGenerate, prismaMigrate, routeAdd, routeDelete, runClient, runServer, setServerHttp, setServerHttps, setUrlLocal, setUrlServer]
const lds = require('lodash');
require('prompts')({
    type: "autocomplete",
    message: "pilih menu",
    name: "menu",
    choices: listFunc.map(e => {
        return {
            title: lds.startCase(e.name),
            value: e
        }
    })
}).then(({
    menu
}) => {
    if (!menu) console.log("ok")
    menu();
})


function addMenu() {
    const colors = require('colors');
    const fs = require('fs');
    const path = require('path');
    require("prompts")({
        type: "text",
        name: "menu",
        message: "tambahkan menu"
    }).then(({
        menu
    }) => {
        if (!menu) return console.log("menu tidak boleh kosong".red);
        fs.writeFileSync(path.join(__dirname, `./${menu}`.replace(' ', '_') + ".js"), "// tambahkan sesuatu", 'utf-8')
    })
}

function buildWeb() {
    const exec = require('child_process').execSync;
    const path = require('path');

    exec(`flutter build web --web-renderer html --release`, {
        stdio: "inherit",
        cwd: path.join(__dirname, "./src")
    });
    exec(`cp -r src/build/web/ ./dist`, {
        stdio: "inherit"
    });
}

function commandClient() {
    const exec = require('child_process').execSync;
    const fs = require('fs');
    const path = require('path');
    const prompts = require('prompts');

    prompts({
        type: "text",
        name: "command",
        message: "masukkan perintah"
    }).then(({
        command
    }) => {
        if (!command) return console.log("ok");
        exec(command, {
            stdio: "inherit",
            cwd: path.join(__dirname, "./src")
        });
    })
}

function commandServer() {
    const exec = require('child_process').execSync;
    const fs = require('fs');
    const path = require('path');
    const prompts = require('prompts');

    prompts({
        type: "text",
        name: "command",
        message: "masukkan perintah"
    }).then(({
        command
    }) => {
        if (!command) return console.log("ok");
        exec(command, {
            stdio: "inherit",
            cwd: path.join(__dirname, "./")
        });
    })
}

function configGenerate() {
    const config = require('../config.json');
    const _ = require('lodash');
    const beautify = require('js-beautify');
    const fs = require('fs');
    const path = require('path');
    const colors = require('colors');

    const key = Object.keys(config);
    let listItem = [];
    for (let itm of key) {
        listItem.push(`static const ${itm} = ${_.isString(config[itm]) ? `'${config[itm]}'` : config[itm]};`);
    }

    const result = `
class Config{
  ${listItem.join('\n')}
}
`
    fs.writeFileSync(path.join(__dirname, "../src/lib/config.dart"), beautify(result, {
        indent_size: 2
    }));
    console.log("config generate complete".green);
}

function generateMenu() {
    const fs = require('fs');
    const path = require('path');
    const _ = require('lodash');

    const sourceDirPath = path.join(__dirname, '../src/lib/menus');
    const sourceList = fs.readdirSync(sourceDirPath);
    const targetFilePath = path.join(__dirname, "./src/lib/menus.dart");
    const targetFile = fs.readFileSync(targetFilePath).toString();
    const regxp = '.*listMenu[\s\S]+\]\;'
    const find = targetFile.match(/.*listMenu[\s\S]+\]\;/g);


    const resultList = [];
    const resultls = [];
    const importList = [];
    for (let itm of sourceList) {
        let name = path.parse(itm).name;
        if (!targetFile.includes(`Menus.${_.camelCase(name)}()`)) {
            let tmp = `Menus.${_.camelCase(name)}(){
            name = "${_.startCase(name)}";
            target = ${_.upperFirst(_.camelCase(name))}();
        }`

            let tmp2 = `Menus.${_.camelCase(name)}()`
            let imp = `import 'package:src/menus/${itm}';`

            resultls.push(tmp2);
            resultList.push(tmp);
            importList.push(imp);
        }
    }


    if (!_.isEmpty(importList)) {
        let impo = `${importList.join('\n')}\n${targetFile}`;
        let impo2 = impo.replace(`late Widget target;`, `late Widget target;\n\n${resultList.join('\n')}`)
        let impo3 = find[0].replace(`];`, `${resultls.join(',\n')}];`);
        let impo4 = impo2.replace(find[0], impo3);
        fs.writeFileSync(targetFilePath, impo4)
        console.log("generate completed");
    } else {
        console.log("no need to generate")
    }
}

function generatePageV2() {
    const fs = require('fs');
    const path = require('path');
    const _ = require('lodash');
    const beautify = require('js-beautify');
    const targetPages = require('./pages.json');
    const colors = require('colors');

    const targetPath = path.join(__dirname, "./src/lib/pages");
    const targetDir = fs.readdirSync(targetPath);

    const listHasil = [];
    for (let itm of targetDir) {
        let name = path.parse(itm).name;
        if (!targetPages.map(e => e.id).includes(name)) {

            let body = {
                "id": name,
                "name": _.startCase(name),
                "path": `/${_.kebabCase(name)}`,
                "target": `${_.upperFirst(_.camelCase(name))}()`,
                "func": `${_.camelCase(name)}()`,
                "listItem": `Pages.${_.camelCase(name)}()`,
                "import": `import 'package:src/pages/${itm}';`,
                "isMenu": false
            }
            listHasil.push(body);
        }
    }


    if (_.isEmpty(listHasil)) {
        console.log("tidak ada halaman baru".yellow);
        _generate();
    } else {
        fs.writeFileSync(path.join(__dirname, "./pages.json"), beautify(JSON.stringify(listHasil), {
            indent_size: 2
        }));

        setTimeout(() => {
            _generate();
        }, 1000);
    }

    function _generate() {

        /** @type {targetPages} */
        const pages = JSON.parse(fs.readFileSync(path.join(__dirname, "./pages.json")).toString())
        const template = `
import 'package:get/get.dart';
import 'package:flutter/material.dart';
${pages.map(e => e.import).join('\n')}

class Pages {
  late String name;
  late Widget target;
  late bool isMenu;
  late String path;

  ${pages.map(e => `
    Pages.${e.func}{
        name = "${e.name}";
        target = ${e.target};
        isMenu = ${e.isMenu};
        path = "${e.path}";
    }
  `).join('')}


  static final list = [
    ${pages.map(e => e.listItem).join(',')}
  ];

  void go() {
    Get.toNamed(path);
  }
}
`

        fs.writeFileSync(path.join(__dirname, "./src/lib/pages.dart"), beautify(template))
        console.log(`${listHasil.map(e => e.name).join(" - ")} generate completed`.green)
    }
}

function gitPush() {
    const exec = require('child_process').execSync;
    const fs = require('fs');
    const path = require('path');
    const prompts = require('prompts');
    const config = require('./config.json')

    let ser = require('./set_url_server')
    let gen = require('./build_web');
    const gitBranch = exec('git rev-parse --abbrev-ref HEAD').toString().trim();
    exec(`git add . && git commit -m "update" && git push origin ${gitBranch}`, {
        stdio: "inherit",
        cwd: path.join(__dirname, "./")
    });

    prompts({
        type: "password",
        name: "pass",
        message: "masukkan password"
    }).then(({
        pass
    }) => {
        if (!pass) return console.log("ok doki");
        exec(`sshpass -p ${pass} ssh makuro@${config.sHost} "cd makuro-studio && git pull && source ~/.nvm/nvm.sh && pm2 restart all"`, {
            stdio: "inherit"
        });
        let gen2 = require('./config_generate.js');
    }).then(async () => {
        let lok = require('./set_url_local');

    })
}

function gitPushForce() {
    const exec = require('child_process').execSync;
    const colors = require('colors');
    const path = require('path');

    exec(`git add . && git commit -m "$(date)" && git push -f origin main `, {
        stdio: "inherit",
        cwd: path.join(__dirname, "../")
    });
    console.log("berhasil".green);
}

function imageGenerate() {
    const fs = require('fs');
    const path = require('path');
    const _ = require('lodash');
    const dir = fs.readdirSync(path.join(__dirname, "../assets/images"));
    const beautify = require('js-beautify')

    let listImage = [];
    for (let item of dir) {
        // basename
        let name = path.parse(item).name;
        const url = "${Config.url}"
        listImage.push(`
    static const ${_.camelCase(name)} = "${url}/assets/image-assets/${name}.png";
    `);
    }

    const tmp = `
import 'package:src/config.dart';

class Img{
  ${listImage.join("")}
}
`

    fs.writeFileSync(path.join(__dirname, "../src/lib/img.dart"), beautify(tmp, {
        indent_size: 2
    }));
    console.log("generate image complate");



}

function pageGenerate() {
    const path = require('path');
    const fs = require('fs');
    const exec = require('child_process').execSync;
    const _ = require('lodash');
    const beautify = require('js-beautify')

    const dir = fs.readdirSync(path.join(__dirname, "../src/lib/pages"));
    let listImport = [];
    let listItem = [];
    let listFactory = []

    for (let itm of dir) {
        listImport.push(`import 'package:src/pages/${itm}';`);
        let ini = `
    {
      "route": "/${_.kebabCase(itm.split('.')[0] == 'root' ? '/' : itm.split('.')[0])}",
      "target": ${_.upperFirst(_.camelCase(itm.split('.')[0]))}(),
    }
    `
        listItem.push(ini);

        let f = `
    Pages.${_.camelCase(itm.split('.')[0]) }() {
        key.val = "/${_.kebabCase(itm.split('.')[0])}";
    }
    `
        if (itm.split('.')[0] != "root") {
            listFactory.push(f)
        }
    }

    let result = `
${listImport.join('\n')}
import 'package:get_storage/get_storage.dart';
import 'package:get/get.dart';

class Pages {
  static final key = "/".val("Pages.key");

  ${listFactory.join('')}  

  static final list = [
    ${listItem.join(',')}
  ];

  void go() {
    Get.toNamed(key.val);
  }
}
`

    fs.writeFileSync(path.join(__dirname, "../src/lib/pages.dart"), beautify(result, {
        indent_size: 2
    }));
    console.log("generate page susscess");
}

function prismaMigrate() {
    const exec = require('child_process').execSync;
    const path = require('path');

    exec(`npx prisma migrate dev --name "migrate"`, {
        stdio: "inherit",
        cwd: path.join(__dirname, "./")
    })
    console.log("migrate completed");
}

function routeAdd() {
    const config = require('../config.json');
    const prompts = require('prompts');
    const pt = require('path');
    const fs = require('fs');

    prompts([{
            type: "text",
            name: "route",
            message: "masukkan route"
        },
        {
            type: "text",
            name: "path",
            message: "masukkan path"
        }
    ]).then(({
        route,
        path
    }) => {
        if (!route) return console.log("route tidak boleh kosong");
        if (!path) return console.log("path tidak boleh kosong");

        const data = {
            "route": route,
            "path": path
        }

        const cekRoute = config.route.find(e => e.route === route);
        if (cekRoute) return console.log("route sudah ada");

        config.route.push(data);
        fs.writeFileSync(pt.join(__dirname, "../config.json"), JSON.stringify(config, null, 2));
        console.log("route berhasil ditambahkan");
    });
}

function routeDelete() {
    const config = require("../config.json");
    const pt = require('path');
    const fs = require("fs");
    const prompts = require("prompts");

    prompts({
        type: "autocomplete",
        name: "route",
        message: "pilih route",
        choices: config.route.map(e => {
            return {
                title: e.route,
                value: e
            }
        })
    }).then(({
        route
    }) => {
        if (!route) return console.log("tidak ada route");
        const index = config.route.indexOf(route);
        config.route.splice(index, 1);
        fs.writeFileSync(pt.join(__dirname, "../config.json"), JSON.stringify(config, null, 4));
        console.log("route berhasil dihapus");
    });
}

function runClient() {
    const exec = require('child_process').execSync
    const path = require('path');
    exec(`flutter run -d chrome`, {
        stdio: "inherit",
        cwd: path.join(__dirname, "./src")
    });
}

function runServer() {
    const exec = require('child_process').execSync;
    const path = require('path');
    exec(`nodemon server.js`, {
        stdio: "inherit",
        cwd: path.join(__dirname, "./")
    });
}

function setServerHttp() {
    const config = require('../config.json');
    const fs = require('fs');
    const path = require('path');

    config.isHttps = false;
    config.url = "http://localhost:3000"
    fs.writeFileSync(path.join(__dirname, "../config.json"), JSON.stringify(config, null, 2));
    console.log("server set to http");


}

function setServerHttps() {
    const config = require('../config.json');
    const fs = require('fs');
    const path = require('path');

    config.isHttps = true;
    config.url = "https://localhost:3000"
    fs.writeFileSync(path.join(__dirname, "../config.json"), JSON.stringify(config, null, 2));
    console.log("server set to https");


}

function setUrlLocal() {
    const fs = require('fs');
    const path = require('path');
    const config = require('./config.json');
    const beautify = require('js-beautify');

    config.protocol = "http";
    config.host = "localhost";
    config.url = `${config.protocol}://${config.host}:${config.port}`

    fs.writeFileSync(path.join(__dirname, "./config.json"), beautify(JSON.stringify(config), {
        indent_size: 2
    }))
    // require('./config_generate.js')
    console.log("Config updated url local")
    require('child_process').execSync(`node ${path.join(__dirname, "./config_generate")}`, {
        stdio: 'inherit'
    })
}

function setUrlServer() {
    const fs = require('fs');
    const path = require('path');
    const config = require('./config.json');
    const beautify = require('js-beautify');

    config.protocol = "https";
    config.host = "makurostudio.my.id";
    config.url = `${config.protocol}://${config.host}`

    fs.writeFileSync(path.join(__dirname, "./config.json"), beautify(JSON.stringify(config), {
        indent_size: 2
    }))
    console.log("Config updated url server")
    require('./config_generate')
}