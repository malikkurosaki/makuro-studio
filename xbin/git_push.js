const exec = require('child_process').execSync;
const fs = require('fs');
const path = require('path');
const prompts = require('prompts');
const config = require('./../config.json')

const gitBranch = exec('git rev-parse --abbrev-ref HEAD').toString().trim();
exec(`git add . && git commit -m "update" && git push origin ${gitBranch}`, { stdio: "inherit", cwd: path.join(__dirname, "./../") });

prompts({
    type: "password",
    name: "pass",
    message: "masukkan password"
}).then(({ pass }) => {
    if (!pass) return console.log("ok doki");
    exec(`sshpass -p ${pass} ssh -o StrictHostKeyChecking=no -p 22 makuro@${config.sHost} "cd makuro-studio && ls"`, { stdio: "inherit" });
})