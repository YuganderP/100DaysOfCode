const mongoose = require("mongoose")
const  DB_URL = "mongodb+srv://admin:Admin%402024@cluster0.ptpacby.mongodb.net/toProject"

// connect to database
mongoose.connect(DB_URL).then(()=>{
    console.log("db connected")
})

// creating user schema

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    jwt_token: String,
    todo: Array

})

const users = new mongoose.model("users",userSchema)

