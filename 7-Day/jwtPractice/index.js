const express = require("express")
const zod = require("zod")
const jwt= require("jsonwebtoken")
const app=express()
const PORT = 3000
app.listen(PORT,()=>{
    console.log("The server has started working")
})

app.use(express.json())
function jsonValidation(req,res,next){
    const mySchema = zod.object({
        name:zod.string(),
        password:zod.string()
    })

const data = req.body
    const authResult=mySchema.safeParse(data)
    if(authResult.success==true){
        console.log("working")
        next()
    }else{
        throw new Error("data sent it wrong json format")
    }

}
// Using JWT :


// Generating JWT TOKEN 

const value = {
    name:"sample",
    accoutNumber:123123
}

const token = jwt.generate(value,"secret")
console.log(token)


// Decoing the JWT token






// Verify the JWT Token 





app.get("/login",jsonValidation,(req,res)=>{

res.send("user logged in successfully")
})


function GlobalCatches(err,req,res,next){

res.send("Wrong json sent")


}
app.use(GlobalCatches)