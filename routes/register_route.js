const express=require('express');
const mongoose=require('mongoose');
const Register=require('../models/register');
const router=new express.Router();
const bodyParser=require('body-parser');
var app=express();

router.get('/users',function(req,res)
{
    Register.find()
    .exec()
    .then(docs =>{
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err 
        });
    });
})
    

     
router.post('/register_user',function(req,res)
{
    console.log(req.body);
     var data=new Register(req.body);
      data.save();
})


router.delete('/deleteuser/:sid',function(req,res)
{
    Register.findByIdAndDelete(req.params.sid);
    console.log("deleted");
})


router.get('/users/:id',function(req,res)
{
    Register.findById(req.params.id)
    .exec()
    .then(docs =>{
        console.log(docs);
        res.status(200).json(docs);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error:err 
        });
    });
})

module.exports=router;
