const mongoose = require("mongoose")
const DB_URL = "mongodb+srv://admin:Admin%402024@cluster0.ptpacby.mongodb.net/toProject"
mongoose.connect(DB_URL).then(()=>{
    // console.log("DB has connected successfully")
}).catch((error)=>{
    console.warn("Error Connecting to the Database")
})

const Todo = new mongoose.Schema({
    name:String,
    Description:String,
    Status: Boolean

})


const Admin = new mongoose.Schema({
    username: String,
    password: String,
    todos:Array
})

const User = new mongoose.Schema({
    username: String,
    password: String,
    todos:Array
})

const todos = new mongoose.model("todos",Todo)
const users = new mongoose.model("users",User)
const admin = new mongoose.model("admin",Admin)
module.exports ={todos,users,admin}
