const exec = require('child_process').execSync;
const path = require('path');

exec(`npx prisma migrate dev --name "migrate"`, { stdio: "inherit", cwd: path.join(__dirname, "./../") })
console.log("migrate completed");