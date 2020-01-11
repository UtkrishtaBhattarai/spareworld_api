const express=require('express');
const Register=require('../models/register');
const router=new express.Router();
const bodyParser=require('body-parser');
var app=express();

<<<<<<< HEAD
=======
router.post('/abc',function(req,res)
{
    console.log("Thankyou");
})
>>>>>>> 540de9cc5d72755292775e6578ada7c10c6eb4bd
router.post('/register',function(req,res)
{
    console.log("AAYE");
    req.send("Main hoon idhar");
<<<<<<< HEAD
    //  const data=new Students(req.body);
    //  data.save();
    //  if(data.save())
    //  {
    //  console.log("save bhayo kaka");
    //  }
=======
     const data=new Students(req.body);
     data.save();
     if(data.save())
     {
     console.log("save bhayo kaka");
     }
>>>>>>> 540de9cc5d72755292775e6578ada7c10c6eb4bd
})

module.exports=router;
