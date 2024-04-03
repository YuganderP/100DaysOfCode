const express = require("express")
const zod = require("zod")
const app = express()
const PORT = 3000;
app.listen(PORT,()=>{
console.log("the server has started working")
})
app.use(express.json())

// function jsonValidation(data){
//     const mySchema = zod.object({
//         name:zod.string(),
//         age:zod.string()
//     })
//     const response =  mySchema.safeParse(data)
//     if(response.success==true){
//         return {"message":"correct data send"}
//     }else{
//        throw new Error("wrong data sent")
//     }
// }

function jsonValidation(data){
    const mySchema = zod.object({
        name: zod.string(),
        age: zod.string()
    })
    const response = mySchema.safeParse(data)
    if (response.success === true) {
        return { "message": "correct data sent" }
    } else {
        throw new Error("Wrong data sent: " + response.error.errors.map(err => err.message).join(', '))
    }
}



function errorHandler(err,req,res,next){

res.send("something wrong with the data given")
}

app.use(errorHandler)

app.put("/enter",(req,res)=>{
   try{
     const response=jsonValidation(req.body)
    res.json(response)

}
catch(error){
    next(error)
}
})

