const colors = require('colors');
const fs = require('fs');
const path = require('path');
require("prompts")({
    type: "text",
    name: "menu",
    message: "tambahkan menu"
}).then(({ menu }) => {
    if (!menu) return console.log("menu tidak boleh kosong".red);
    fs.writeFileSync(path.join(__dirname, `./${menu}`.replace(' ', '_') + ".js"), "// tambahkan sesuatu", 'utf-8')
})