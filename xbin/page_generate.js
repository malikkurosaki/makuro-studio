const path = require('path');
const fs = require('fs');
const exec = require('child_process').execSync;
const _ = require('lodash');
const beautify = require('js-beautify')

const dir = fs.readdirSync(path.join(__dirname, "../src/lib/pages"));
let listImport = [];
let listItem = [];

for (let itm of dir) {
    listImport.push(`import 'package:src/pages/${itm}';`);
    let ini = `
    {
      "route": "/${_.kebabCase(itm.split('.')[0])}",
      "target": ${_.upperFirst(_.camelCase(itm.split('.')[0]))}(),
    }
    `
    listItem.push(ini);
}

let result = `
${listImport.join('\n')}

class Pages {
  static final list = [
    ${listItem.join(',')}
  ];
}
`

fs.writeFileSync(path.join(__dirname, "../src/lib/pages.dart"), beautify(result, { indent_size: 2 }));
console.log("generate page susscess");
