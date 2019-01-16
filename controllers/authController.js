const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const user = require("../models/users");

router.post('/auth' , user.findEmail , (req , res)=> {
    // cheack 
    if (!res.user){

    }
})

router.post("/user" , user.findEmail , user.create)
if (res.user){
    res.status(400).send("user is already registered !!!!!! ")
}else {
    const {email , name , id} = req.user;
}

module.exports = jwt;