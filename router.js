const router = require('express').Router();
const config = require("./config.json");
const pt = require("path");
const fs = require("fs");

for (let r of config.route) {
    router.get(r.route, (req, res) => {
        if (fs.existsSync(pt.join(__dirname, r.path))) {
            res.sendFile(pt.join(__dirname, r.path))
        } else {
            res.status(404).send("404 | Not Found");
        }
    });
}

module.exports = router;

