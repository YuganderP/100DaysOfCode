const express = require("express")
const zod = require("zod")
const app = express()
const PORT = 3000;

app.use(express.json()) // it is the middleware to parse the json data in request bodies 
let requestCount=0;

function errorHandler(err,req,res,next){
    console.log(err)
    res.send("cannot find user")
}
app.use(errorHandler)



app.listen(PORT,()=>{
    console.log("the server has started working");
})



function requestCounter(req,res,next){
requestCount++;
next();
}

function authCheck(req,res,next){
  
    if(req.headers.username!="admin" && req.headers.password !="123"){
        const error = new Error("invald credentials")
        res.status(403).send("invalid username and password")
    }else {
        next()
    }

}

app.use(authCheck)
app.get("/",requestCounter,(req,res)=>{
    
res.status(200).send("logged in successfully")

})



