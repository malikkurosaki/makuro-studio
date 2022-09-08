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
    if (itm.split('.')[0] != "root"){
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

fs.writeFileSync(path.join(__dirname, "../src/lib/pages.dart"), beautify(result, { indent_size: 2 }));
console.log("generate page susscess");
