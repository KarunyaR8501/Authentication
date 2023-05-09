const signuprouter = require("express").Router()
const SignupSchema = require("../models/users")

signuprouter.post('/',(req,res,next)=>{
    const {userName,userEmail,phoneNumber,password} = req.body

    const newUser = new SignupSchema({
        userName:userName,
        userEmail:userEmail,
        phoneNumber:phoneNumber,
        password:password
    })
     newUser.save()
     .then((response)=>{
        if(response._id){
          return res.status(200).json({
                message:"Account created",
                data:response
            })
        }else{
            return res.status(500).json({
                message:"Account not created",
                data:response
            })
        }
     }).catch((error)=>{
        return res.status(400).json({
            message:"bad request",
            data:error
        })
     })
})


module.exports = signuprouter