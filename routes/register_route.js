const express=require('express');
const mongoose=require('mongoose');
const Register=require('../models/register');
const router=new express.Router();
const bodyParser=require('body-parser');
var app=express();
const auth = require("../middleware/auth");
const jwt=require('jsonwebtoken');
const config=require('../config');
const bcrypt=require('bcryptjs');

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
   
});  
router.post('/register_user', (req, res, next) => {
    let password = req.body.password;
    console.log(password);
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
            let err =  new Error('Could not hash!');
		err.status = 500;
        return next(err);
        }
        Register.create({
            fname: req.body.fname,
            lname: req.body.lname,
            email: req.body.email,
            address:req.body.address,
            number:req.body.number,
            password: hash
        }).then((register) => {
            console.log("This is yaha")
            let token = jwt.sign({ _id: register._id },config.SECRET);
            res.json({ status: "Signup success!", token: token });
            console.log(req.body);
        }).catch(next);
    });
});
router.delete('/deleteuser/:id',function(req,res)
{
   Register.findByIdAndDelete(req.params.id,req.body,function(err,register)
   {
       if(err) return next(err);
       res.json(register);
   });
});
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
});

router.get('/me', auth.verifyUser, (req, res, next) => {
    res.json({ _id: req.Register._id, fname: req.Register.fname, lname: req.Register.lname, email: req.Register.email, address:req.Register.address,number:req.Register.number });
});




router.post('/login_user', (req, res, next) => {
    Register.findOne({ email: req.body.email })
        .then((register) => {
            if (register == null) {
                let err = new Error('User not found!');
                err.status = 401;
                return next(err);
            } else {
                bcrypt.compare(req.body.password, register.password)
                    .then((isMatch) => {
                        if (!isMatch) {
                            let err = new Error('Password does not match!');
                            err.status = 401;
                            return next(err);
                        }
                        let token = jwt.sign({ _id: Register._id },config.SECRET);
                        res.json({ status: 'Login success!', token: token });
                    }).catch(next);
            }
        }).catch(next);
});

router.get('/test_url',auth.verifyUser,function(req,res)
{
    res.send("Working correctly");
})
   
module.exports=router;
