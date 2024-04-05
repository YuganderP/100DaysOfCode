const express = require("express")
const zod = require("zod")
const jwt= require("jsonwebtoken")
const app=express()
const PORT = 3000
app.listen(PORT,()=>{
    console.log("The server has started working")
})
