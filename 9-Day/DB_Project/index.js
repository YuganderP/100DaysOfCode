const express = require("express")
const bodyParser = require("body-parser")
const adminRouter = require("./Routes/adminRouter")
const userRouter = require("./Routes/userRouter")
const app = express()
const PORT = 3000;

// using the middlewares 

app.use(bodyParser.json())
app.use("/admin",adminRouter)
app.use("/user",userRouter)

app.listen(PORT,()=>{
    console.log("The server has started working ")
})