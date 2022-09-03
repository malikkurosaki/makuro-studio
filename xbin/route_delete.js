const config = require("../config.json");
const pt = require('path');
const fs = require("fs");
const prompts = require("prompts");

prompts({
    type: "autocomplete",
    name: "route",
    message: "pilih route",
    choices: config.route.map(e => {
        return {
            title: e.route,
            value: e
        }
    })
}).then(({ route }) => {
    if (!route) return console.log("tidak ada route");
    const index = config.route.indexOf(route);
    config.route.splice(index, 1);
    fs.writeFileSync(pt.join(__dirname, "../config.json"), JSON.stringify(config, null, 4));
    console.log("route berhasil dihapus");
});