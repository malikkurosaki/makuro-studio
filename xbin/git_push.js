const exec = require('child_process').execSync;
const fs = require('fs');
const path = require('path');
const prompts = require('prompts');
const config = require('./../config.json')

let ser = require('./set_url_server')
let gen = require('./build_web');
const gitBranch = exec('git rev-parse --abbrev-ref HEAD').toString().trim();
exec(`git add . && git commit -m "update" && git push origin ${gitBranch}`, { stdio: "inherit", cwd: path.join(__dirname, "./../") });

prompts({
    type: "password",
    name: "pass",
    message: "masukkan password"
}).then(({ pass }) => {
    if (!pass) return console.log("ok doki");
    exec(`sshpass -p ${pass} ssh makuro@${config.sHost} "cd makuro-studio && git pull && source ~/.nvm/nvm.sh && pm2 restart all"`, { stdio: "inherit" });
    let gen2 = require('./config_generate.js');
}).then(async () => {
    let lok = require('./set_url_local');

})