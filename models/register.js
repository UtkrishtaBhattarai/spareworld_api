const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const Register=mongoose.model('register',
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


module.exports=Register;