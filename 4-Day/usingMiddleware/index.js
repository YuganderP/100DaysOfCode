const express = require("express")
const app = express()
const PORT = 3000;
app.listen(PORT,()=>{
    console.log("the server has started working ")
})
app.use(requestCounter)  // we use app.use() if we want the middleware to be executed for every route
function credentialsCheck(req,res,next){
    //credentials check middleware  
    if(req.headers.userName!="user" && req.headers.password!="pass"){
        res.status(403).send("invalid credentials")
    }
    else{
        next()
    }
}

// request counter middleware
let requestCount=0;
function requestCounter(req,res,next)
{
    requestCount++;
    next();
}

app.get("/",credentialsCheck,(req,res)=>{
    res.json({"message":"hello there"})
})
app.get("/request",(req,res)=>{
    res.json({
        "totalRequests":requestCount
    })
})