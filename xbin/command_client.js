const exec = require('child_process').execSync;
const fs = require('fs');
const path = require('path');
const prompts = require('prompts');

prompts({
    type: "text",
    name: "command",
    message: "masukkan perintah"
}).then(({ command }) => {
    if (!command) return console.log("ok");
    exec(command, { stdio: "inherit", cwd: path.join(__dirname, "./../src") });
})