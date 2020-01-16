const mongoose=require('mongoose');
const Register=mongoose.model('Register',
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
    }
})
module.exports=Register;