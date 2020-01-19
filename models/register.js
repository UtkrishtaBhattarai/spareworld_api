const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const config=require('../config');
const Register= new mongoose.Schema(
{
    fname:{
        type:String
    },
    lname:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    address:{
        type:String
    },
    number:{
       type:String 
    },
    tokens: [{
        token: {
        type: String,
        required: true
        }
        }]
});

Register.statics.checkCrediantialsDb = async (email1, password1) =>{
 
   const user= Register.findOne({ email: email1 }, function (err, Register) {
if (err) return res.status(500).send('Error on the server.');
     if (!Register) return res.status(404).send('No user found.');
         var passwordIsValid =(password1, Register.password);
             if (passwordIsValid) 
             {
                return user;
             }
    }
    )}

    Register.methods.generateAuthToken = async function () {
       
        const token = jwt.sign({ _id: Register._id},config.secret);
        console.log(token);
         Register.tokens = Register.tokens.concat({ token:token})
         await Register.save()
         return token
    }

    //console.log("Token not working");
       
      
    
      
    
module.exports=mongoose.model('register',Register);