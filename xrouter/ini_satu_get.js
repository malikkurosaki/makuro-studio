const expressAsyncHandler = require("express-async-handler");

module.exports = expressAsyncHandler(async (req,res) => {
    res.send("hahaha ini satu");
})