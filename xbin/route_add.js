const config = require('../config.json');
const prompts = require('prompts');
const pt = require('path');
const fs = require('fs');

prompts([
    {
        type: "text",
        name: "route",
        message: "masukkan route"
    },
    {
        type: "text",
        name: "path",
        message: "masukkan path"
    }
]).then(({ route, path }) => {
    if (!route) return console.log("route tidak boleh kosong");
    if (!path) return console.log("path tidak boleh kosong");

    const data = {
        "route": route,
        "path": path
    }

    const cekRoute = config.route.find(e => e.route === route);
    if (cekRoute) return console.log("route sudah ada");

    config.route.push(data);
    fs.writeFileSync(pt.join(__dirname, "../config.json"), JSON.stringify(config, null, 2));
    console.log("route berhasil ditambahkan");
});