const exec = require('child_process').execSync;
const colors = require('colors');
const path = require('path');

exec(`git add . && git commit -m "$(date)" && git push -f origin main `, { stdio: "inherit", cwd: path.join(__dirname, "../") });
console.log("berhasil".green);