const config = require('../config.json');
const fs = require('fs');
const path = require('path');

config.isHttps = true;
config.url = "https://localhost:3000"
fs.writeFileSync(path.join(__dirname, "../config.json"), JSON.stringify(config, null, 2));
console.log("server set to https");


