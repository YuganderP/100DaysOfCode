const mongoose = require("mongoose")
const DBURL = "mongodb+srv://admin:Admin%402024@cluster0.ptpacby.mongodb.net/PaymentsApp"
// build userSchame 
mongoose.connect(DBURL).then(()=>{console.log("Db connected")})
const userSchema = new mongoose.Schema({
    username:String,
    firstName:String,
    password:String,
    email:String
})

const AccountSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    Balance:{
        type:Number,
        required:true
    }
})

const User = new mongoose.model("User",userSchema) 
const Account = new mongoose.model("Account",AccountSchema) 


module.exports={User,Account}
