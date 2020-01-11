const express=require('express');
const Register=require('../models/register');
const router=new express.Router();
const bodyParser=require('body-parser');
var app=express();

router.post('/abc',function(req,res)
{
    console.log("Thankyou");
})
router.post('/register',function(req,res)
{
    console.log("AAYE");
    req.send("Main hoon idhar");
     const data=new Students(req.body);
     data.save();
     if(data.save())
     {
     console.log("save bhayo kaka");
     }
})

module.exports=router;
