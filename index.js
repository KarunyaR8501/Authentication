const express = require("express")
const node_server = express()
const app = require('./app')
const port=7000;

require("./dbconfig")


node_server.use(app)
node_server.listen(port,"localhost",()=>{
    console.log("server started")
})