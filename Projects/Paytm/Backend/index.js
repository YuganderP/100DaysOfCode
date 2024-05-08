const express = require("express")
const cors = require("cors")
const app = express()

const mainRouter = require("./Routers/mainRouter")
const PORT = 3000
app.use(cors())
app.use(express.json())
app.use(mainRouter)
app.listen(PORT,()=>{
    console.log("The server has started working")
})