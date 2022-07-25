#!/usr/bin/env node

const execSync = require('child_process').execSync
const prompts = require('prompts');
const path = require('path');
const fs = require('fs');
const beautify = require('js-beautify');
const _ = require('lodash');
const colors = require('colors');

const dirPage = fs.readdirSync(path.join(__dirname, './../../../client/lib/makuro_pages'));
const targetPath = path.join(__dirname, `./../../../client/lib/utils/makuro_pages.dart`);

if (_.isEmpty(dirPage)) {
    console.log("tidak ada page".red);
    return;
}

// import 'package:makuro_studio/makuro_pages/makuro_home.dart';

let resultItem = {
    instance: [],
    import: [],
    listPage: []
};
dirPage.forEach(e => {
    let name = _.camelCase(e.replace('.dart', ''));
    resultItem.instance.push(`MakuroPages.${name}(): _page = '/${name}';`);
    resultItem.import.push(`import 'package:makuro_studio/makuro_pages/${e}';`);
    resultItem.listPage.push(`GetPage(name: '/${name}', page: () => const ${_.startCase(_.camelCase(name)).replace(' ', '')}()),`);
   
})

let template =
    `
    import 'package:get/get.dart';
    ${resultItem.import.join('\n')}

    class MakuroPages{
    late String _page;

    ${resultItem.instance.join('\n')}

    static final pages = <GetPage>[
        ${resultItem.listPage.join('\n')}
    ];

    go() => Get.toNamed(_page);
    goOff() => Get.offNamed(_page);
    goOffAll() => Get.offAllNamed(_page);
    }
    
    `

fs.writeFileSync(targetPath, beautify(template), "utf8");

console.log("Page berhasil ditambahkan".green);




