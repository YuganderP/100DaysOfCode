const express = require('express')
const app = express()
const PORT = 3000;
app.listen(PORT,()=>{console.log("the server has started working")})
app.use(express.json())
function errorHandler(err,req,res,next){
    res.status(403).send("oops something's wrong")
}

function credValidator(req,res,next){
    if(req.headers.username!="admin" && req.headers.password!="123"){
      next (new Error("worng credentials"))
    }else{
        next()
    }
}



app.get("/",credValidator,(req,res,)=>{
res.status(200).send("you are successfully logged in ")

})
app.use((err,req,res,next)=>{
    res.send("there is something worng")

})