const express = require("express")

const app = express.Router();

app.get("/v1",(req,res)=>{
    res.send("hello form users");
});
module.exports = app;

