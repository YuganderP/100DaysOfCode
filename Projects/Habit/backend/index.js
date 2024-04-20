const express = require("express")
const cors = require("cors")
const todoRouter = require("./Routes/Todo")
const userRouter = require("./Routes/User")
const adminRouter = require("./Routes/Admin")
const app = express()
const PORT = 3000;

app.use(express.json())
app.use(cors())

app.listen(PORT,()=>{
    console.log("The server has started working")
})
app.use("/todo",todoRouter)
app.use("/admin",adminRouter)
app.use("/user",userRouter)