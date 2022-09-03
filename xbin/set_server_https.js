const config = require('../config.json');
const fs = require('fs');
const path = require('path');

config.isHttps = true;
fs.writeFileSync(path.join(__dirname, "../config.json"), JSON.stringify(config, null, 2));
console.log("server set to https");


