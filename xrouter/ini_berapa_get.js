const path = require('path');
const fs = require('fs');
const expressAsyncHandler = require('express-async-handler');

module.exports = expressAsyncHandler(async (req, res) => {

    res.send("halo ini ada diamana");
});