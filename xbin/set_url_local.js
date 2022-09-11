const fs = require('fs');
const path = require('path');
const config = require('./../config.json');
const beautify = require('js-beautify');

config.protocol = "http";
config.host = "localhost";
config.url = `${config.protocol}://${config.host}:${config.port}`

fs.writeFileSync(path.join(__dirname, "./../config.json"), beautify(JSON.stringify(config), { indent_size: 2 }))
require('./config_generate.js')
console.log("Config updated url local")
