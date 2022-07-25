const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const path = require("path");
var SSE = require('express-sse');
var sse = new SSE("inidimana");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')))
// app.use(express.static(path.join(__dirname, './../../my-probus/client/build/web/')))

app.get('/probus', (req, res) => res.sendFile(path.join(__dirname, './../../my-probus/client/build/web/index.html')))

app.get('/sse', sse.init);

setTimeout(() => {
  console.log("kirim");
  sse.updateInit("apanya");

}, 5000);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


