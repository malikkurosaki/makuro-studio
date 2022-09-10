const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const sourceDirPath = path.join(__dirname, '../src/lib/menus');
const sourceList = fs.readdirSync(sourceDirPath);
const targetFilePath = path.join(__dirname, "./../src/lib/menus.dart");
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