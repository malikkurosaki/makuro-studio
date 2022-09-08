const express = require('express');
const app = express();
const http = require('http');
const https = require('https');
// const PORT = process.env.HPPT_PORT || 5000;
const fs = require('fs');
const router = require('./router');
const config = require('./config.json');
const path = require('path');
const routeImage = require('./router_image');

app.use(express.static(path.join(__dirname, "./dist")))
app.use(router);
app.use(routeImage);

app.use((req, res) => {
    res.status(404).type("text/html").send("404 | Not Found");
})
app.use((req, res) => {
    res.status(500).type("text/html").send("500 | Sever Error")
})

if (config.isHttps) {
    const options = {
        key: fs.readFileSync('./key.pem'),
        cert: fs.readFileSync('./crt.pem')
    };

    https.createServer(options, app).listen(config.port, () => {
        console.log(`HTTPS server listening on port ${config.port}`);
    });
} else {
    http.createServer(app).listen(config.port, () => {
        console.log(`HTTP server listening on port ${config.port}`);
    });

}





