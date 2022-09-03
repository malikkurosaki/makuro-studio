const express = require('express');
const app = express();
const http = require('http');
const https = require('https');
const PORT = process.env.HPPT_PORT || 5000;
const fs = require('fs');
const router = require('./router');
const config = require('./config.json');

app.get('/', (req, res) => {
    res.send("apa kabarnya");
})

app.use(router);
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

    https.createServer(options, app).listen(PORT, () => {
        console.log(`HTTPS server listening on port ${PORT}`);
    });
} else {
    http.createServer(app).listen(PORT, () => {
        console.log(`HTTP server listening on port ${PORT}`);
    });

}





