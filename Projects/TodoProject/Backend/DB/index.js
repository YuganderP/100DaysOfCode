const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:Admin%402024@cluster0.ptpacby.mongodb.net/TodoApp")
const todoSchema= new mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean,
    
})
const userSchema= new mongoose.Schema({
    username:String,
    password: String,
    todoItems:Array
})

const user = mongoose.model("users",userSchema)
const todo= mongoose.model("todos",todoSchema)

module.exports={user,todo}

