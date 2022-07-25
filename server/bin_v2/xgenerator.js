const path = require("path");
const { project } = require(path.join(__dirname, "./xpkg.json"));
const fs = require("fs");
const _targetPath = path.join(__dirname, "./xpilihan.js");
const _controllerPath = path.join(__dirname, "./controller.js");

const jsBeauty = require("js-beautify").js;
const _ = require("lodash");

module.exports = () => {
  if(!fs.existsSync(_controllerPath)){
    fs.writeFileSync(_controllerPath, "", "utf8");
  }
  
  const _controllerContent = fs.readFileSync(_controllerPath, "utf8");
  let conFun = [];
  let conExp = [];
  for(let item of project){
    if (!_controllerContent.includes(`function ${_.camelCase(item.name)}()`)) {
      conFun.push(`function ${_.camelCase(item.name)}(){}`);
    }
    if (_controllerContent.includes(`module.exports`) && !_controllerContent.includes(`${_.camelCase(item.name)}()`)) {
      conExp.push(`${_.camelCase(item.name)}`);
    }
  }

  const _controllerContentNew = _controllerContent ;

  fs.writeFileSync(_controllerPath, jsBeauty(_controllerContentNew), "utf8");

  const choices = project
    .map((e) => {
      return {
        title: e.name,
        value: _.camelCase(e.name),
      };
    })
    .map((e) => JSON.stringify(e))
    .join(",");

  const cases = project
    .map((e) => {
      return `case "${_.camelCase(e.name)}":
      controller.${_.camelCase(e.name)}();
      break;`;
    })
    .join("\n");

  console.log(choices);
  const template = `
    const prompts = require("prompts");
    const controller = require('./controller.js');

    module.exports = async () => {
        const prompts = prompts({
            type: "select",
            name: "pilihan",
            message: "Pilih menu",
            choices: [${choices}]
        }).then(({pilihan}) => {
            switch (pilihan) {
                ${cases}
                default: console.log("Pilihan tidak ditemukan"); break;
            }
        })
    }
    `;

  fs.writeFileSync(_targetPath, jsBeauty(template));
};
