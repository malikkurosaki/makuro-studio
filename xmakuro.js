#!/usr/bin/env node
const prettier = require('prettier');
const path = require("path");
const fs = require('fs');

const dir = fs.readdirSync(path.join(__dirname, "./xbin"));

require('prompts')({
    type: "autocomplete",
    name: "menu",
    message: "pilih menunya",
    choices: dir.map(x => ({ title: x.split(".")[0].replace(/_/g, " "), value: x }))
}).then(({ menu }) => {
    if (!menu) return console.log("ok");
    require(path.join(__dirname, "./xbin/" + menu));
})