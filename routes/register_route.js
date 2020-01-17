const express=require('express');
const mongoose=require('mongoose');
const Register=require('../models/register');
const router=new express.Router();
const bodyParser=require('body-parser');
var app=express();
const auth = require("../middleware/auth");
const jwt=require('jsonwebtoken');
const config=require('../config');

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
router.post('/register_user',function(req,res)
{
    console.log(req.body);
     var data=new Register(req.body);
      data.save();
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
})





router.post("/login_user", function (req, res) {
    try {
        Register.findOne({ email: req.body.email }, function (err, Register) {
                  if (err) return res.status(500).send('Error on the server.');
                  if (!Register) return res.status(404).send('No user found.');
                  var passwordIsValid =(req.body.password, Register.password);
                  if (!passwordIsValid) 
                  return res.status(401).send({ auth: false, token: null });

                  token =  Register.generateAuthToken();
       
        })}
         catch (e) {
        res.status(200).send()}

});
// router.post('/login_user', function(req, res) {

//     Register.findOne({ email: req.body.email }, function (err, Register) {
//       if (err) return res.status(500).send('Error on the server.');
//       if (!Register) return res.status(404).send('No user found.');
//       var passwordIsValid =(req.body.password, Register.password);
//       if (!passwordIsValid) return res.status(401).send({ auth: false, token: null });
//       var token = jwt.sign({ id: Register._id },config.secret, {
//         expiresIn: 86400 // expires in 24 hours
//       });
//     //   Register.token = Register.token.concat({ token :token })
//     //    Register.save()
//       res.status(200).send({ auth: true, token: token });
//     });
    
//   });








router.get('/test_url',auth,function(req,res)
{
    res.send("Working correctly");
})
   
module.exports=router;
