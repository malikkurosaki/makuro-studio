const fs = require('fs');
const path = require('path');
const config = require('./../config.json');
const beautify = require('js-beautify');

config.protocol = "https";
config.host = "makurostudio.my.id";
config.url = `${config.protocol}://${config.host}:${config.port}`

fs.writeFileSync(path.join(__dirname, "./../config.json"), beautify(JSON.stringify(config), { indent_size: 2 }))
console.log("Config updated url server")