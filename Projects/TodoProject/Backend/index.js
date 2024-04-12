const express = require("express")
const bodyParser=require("body-parser")
const router = require("./Router/user")
const app = express()

const PORT = 3000
app.use(express.json())
app.use("/todo",router)
app.listen(PORT,()=>{
    console.log("The server has started working")

})

