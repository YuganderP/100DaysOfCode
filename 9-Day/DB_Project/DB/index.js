const mongoose = require("mongoose")


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

const user = new mongoose.model("user",userSchema)
const admin = new mongoose.model("admin",adminSchema)
const course = new mongoose.model("course",courseSChema)

module.exports={user,admin,course}