const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const beautify = require('js-beautify');
const targetPages = require('./../pages.json');
const colors = require('colors');

const targetPath = path.join(__dirname, "./../src/lib/pages");
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
    fs.writeFileSync(path.join(__dirname, "./../pages.json"), beautify(JSON.stringify(listHasil), { indent_size: 2 }));

    setTimeout(() => {
        _generate();
    }, 1000);
}

function _generate() {

    /** @type {targetPages} */
    const pages = JSON.parse(fs.readFileSync(path.join(__dirname, "./../pages.json")).toString())
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

    fs.writeFileSync(path.join(__dirname, "./../src/lib/pages.dart"), beautify(template))
    console.log(`${listHasil.map(e => e.name).join(" - ")} generate completed`.green)
}