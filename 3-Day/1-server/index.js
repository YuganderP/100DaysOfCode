const express = require("express")
const bodyParser=require('body-parser')
const app = express()
const port = 3000
app.use(bodyParser.json())
app.listen(port)
app.post("/sample",(req,res)=>{
    console.log(req.body)
})
app.get("/",(req,res)=>{
    res.send("hello world")
    console.log("hello world")
})
app.get("/sample/:id",(req,res)=>{
    res.send(req.params.id)
})