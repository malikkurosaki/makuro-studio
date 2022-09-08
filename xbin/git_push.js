const exec = require('child_process').execSync;
const fs = require('fs');
const path = require('path');

const gitBranch = exec('git rev-parse --abbrev-ref HEAD').toString().trim();
exec(`git add . && git commit -m "update" && git push origin ${gitBranch}`, {stdio: "inherit", cwd: path.join(__dirname, "./../")});
