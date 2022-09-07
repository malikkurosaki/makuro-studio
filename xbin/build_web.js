const exec = require('child_process').execSync;
const path = require('path');

exec(`flutter build web`, { stdio: "inherit", cwd: path.join(__dirname, "./../src") });
exec(`cp -r src/build/web/ ./dist`, { stdio: "inherit"});