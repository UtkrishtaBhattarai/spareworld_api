const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const Register=mongoose.Schema(
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
 
    const user1 = await Register.findOne({email : email1, password : password1})
     return user1;
    }

    Register.methods.generateAuthToken = async function () {
        const Register = this
       const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse')
       console.log(token);
        Register.tokens = user.tokens.concat({ token :token })
        await Register.save()
        return token
       }

module.exports=Register;