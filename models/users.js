const mongoose = require("mongoose")
const SignupSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("user",SignupSchema)