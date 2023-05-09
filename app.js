const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const signuprouter = require("./controllers/signup")

//middleware
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))



//injecting controller
app.use("/api/signup",signuprouter)

module.exports = app