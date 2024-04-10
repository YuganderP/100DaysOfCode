const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://admin:Admin%402024@cluster0.ptpacby.mongodb.net/google")
const newSchema = new mongoose.Schema({
    username:String,
    password:String
    
})

const User = mongoose.model("User",newSchema)
const user = new User({username:"sample",password:"sample_password"})
user.save()