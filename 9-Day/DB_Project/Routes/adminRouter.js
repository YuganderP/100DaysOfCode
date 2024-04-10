const {Router}= require("express")
const router = Router()
const {admin,course,user} = require("../DB")
const adminMiddleware = require("../Middleware/admin")
router.post("/signup",(req,res)=>{
const username = req.headers.username
const password = req.headers.password
console.log(username,password)
admin.create({
    username:username,password:password
}).then((value)=>{
    res.send("user has been created")
})



})

router.post("/course",adminMiddleware,(req,res)=>
{
const title = req.body.title;
const description = req.body.title;
const price = req.body.price
course.create({title,description,price}).then((value)=>{
    res.status(200).json({message:"course has been added"})
})



})

router.get("/courses",(req,res)=>{
course.find({}).then((value)=>{
    res.status(200).json({message:value})
})



})

module.exports = router;