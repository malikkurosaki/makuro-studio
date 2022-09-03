const express = require('express');
const app = express();
const http = require('http');
const https = require('https');
const HTTP_PORT = process.env.HPPT_PORT || 5000;
const HTTPS_PORT = process.env.HTTPS_PORT || 443;
const fs = require('fs');

app.get('/', (req, res) => {
    res.send("apa kabarnya");
})

http.createServer(app).listen(HTTP_PORT, () => {
    console.log(`HTTP server listening on port ${HTTP_PORT}`);

});

const options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./crt.pem')
};

https.createServer(options, app).listen(HTTPS_PORT, () => {
    console.log(`HTTPS server listening on port ${HTTPS_PORT}`);
});


