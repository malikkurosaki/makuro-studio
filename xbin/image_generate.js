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

fs.writeFileSync(path.join(__dirname, "../src/lib/img.dart"), beautify(tmp, { indent_size: 2 }));
console.log("generate image complate");



