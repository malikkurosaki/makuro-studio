const exec = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

exec(`git add . && git commit -m "update" && git push origin main`, {stdio: "inherit", cwd: path.join(__dirname, "./../")});
const version = exec('git describe --tags --always --dirty').toString().trim();
console.log(version);