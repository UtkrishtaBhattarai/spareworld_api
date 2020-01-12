const express=require('express');
const Register=require('../models/register');
const router=new express.Router();
const bodyParser=require('body-parser');
var app=express();

router.get('/register',function(req,res)
{
    console.log("AAYE");
    res.send("Main hoon idhar");
    //  const data=new Students(req.body);
    //  data.save();
    //  if(data.save())
    //  {
    //  console.log("save bhayo kaka");
    //  }
})
module.exports=router;
