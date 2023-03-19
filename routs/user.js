const express = require("express");
const { welcome, getAllUsers, createUsers, deleteUser, signIN } = require("../controllers/usercontrollers");

const app = express.Router();

app.get("/v1",(req,res)=>{
    res.send("hello form users");
});

app.get("/welcome", welcome);
app.get("/", getAllUsers);
app.post("/", createUsers);
app.post("/signin",signIN)
app.delete("/:user", deleteUser);

module.exports = app

