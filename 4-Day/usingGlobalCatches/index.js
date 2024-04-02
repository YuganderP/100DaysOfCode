const express = require("express")
const app = express()
const PORT = 3000
function checkingCreds(req,res,next){
if(req.headers.username!="user" && req.headers.password!="pass"){
    res.status(403).send("invalid credentials")
}else{
    next()
}


}

app.listen(PORT,()=>{
    console.log("the server has started working")
})


app.get("/",checkingCreds,(req,res)=>{
    res.json({"message":"you have logged in "})
})



// Global catches (error handling middleware)
app.use((err,req,res,next)=>{
    res.send("there is something worng")

})