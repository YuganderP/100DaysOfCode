const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:Admin%402024@cluster0.ptpacby.mongodb.net/users")
const adminSchema= new mongoose.Schema({
    username:String,
    password:String
})

const userSchema= new mongoose.Schema({
    username:String,
    password:String,
    purchasesCourses:{
        type:  mongoose.Schema.ObjectId,
        ref:"course"
    }
})

const courseSChema = new mongoose.Schema({
    title:String,
    description: String,
    price:Number,
})

const user = new mongoose.model("users",userSchema)
const admin = new mongoose.model("admins",adminSchema)
const course = new mongoose.model("courses",courseSChema)

module.exports={user,admin,course}