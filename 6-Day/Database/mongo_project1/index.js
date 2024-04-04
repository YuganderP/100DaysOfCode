const express = require("express")
const mongoose = require("mongoose")
const app = express()
const PORT = 3000;
const DB_URL="mongodb+srv://admin:Admin%402024@cluster0.ptpacby.mongodb.net/sample"
mongoose.connect(DB_URL)
const User = mongoose.model('user',{name:String,age:Number,email:String})


app.listen(PORT,()=>{console.log("the server has started working")})
app.get("/",(req,res)=>{
    res.send("hello world")

})
app.use(express.json())
app.put("/data",(req,res)=>{
  const s_name=req.body.name
  const s_age= req.body.age
  const s_email=req.body.email
    const user = new User({name:s_name,age:s_age,email:s_email})
    console.log(req.body)
    user.save()
res.send(req.body)
})