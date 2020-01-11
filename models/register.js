const mongoose=require('mongoose');
const Registration=mongoose.model('Registration',
{
    
name:{
    type:String
},
age:{
    type:String
},
    address:{
        type:String
    },
    number:{
       type:String 
    }
})
module.exports=Registration;