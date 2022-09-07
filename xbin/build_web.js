const exec = require('child_process').execSync;
const path = require('path');

exec(`flutter build web`, { stdio: "inherit", cwd: path.join(__dirname, "./../src") });
console.log("build web completed");