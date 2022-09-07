const exec = require('child_process').execSync;
const path = require('path');
exec(`nodemon server.js`, { stdio: "inherit", cwd: path.join(__dirname, "./../") });