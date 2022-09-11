const config = require('../config.json');
const _ = require('lodash');
const beautify = require('js-beautify');
const fs = require('fs');
const path = require('path');
const colors = require('colors');

module.exports = (async () => {
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
  fs.writeFileSync(path.join(__dirname, "../src/lib/config.dart"), beautify(result, { indent_size: 2 }));
  console.log("config generate complete".green);
})()