const express=require('express');
const mongoose=require('mongoose');
const Authentication=require('../models/authentication');
const router=new express.Router();
const bodyParser=require('body-parser');
const auth = require("../middleware/auth")

router.post("/login", async function (req, res) {

    try {
    const Authentication = await Authentication.checkCrediantialsDb(req.body.email,
   req.body.password);
   console.log(req.body.email);
   console.log(req.body.password);
    const token = await Authentication.generateAuthToken()
    res.send({ user, token })
    } catch (e) {
    res.status(400).send()
    } 
   })
   
    router.get("/test_url", auth, function(req, res){
        res.send("this is my test page")
    })
    module.exports=router;