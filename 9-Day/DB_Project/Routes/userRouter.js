const {Router}= require("express")
const userMiddleware = require("../Middleware/user")
const router = Router()
const {user,course} = require("../DB")

router.get("/courses",(req,res)=>{
course.find({}).then((value)=>{
    res.status(200).json({message:value})
})

})

router.put("/signup",(req,res)=>{
const username = req.headers.username
const password = req.headers.password
console.log(username,password)
user.create({
    username:username,password:password
}).then((value)=>{
    res.send("user has been created")
})



})

router.get("/courses/:courseid",(req,res)=>{
course.find({_id:req.params.courseid}).then((value)=>{
if(value.length>0){
    res.status(200).json({details:value})
}else{
res.status(200).json({"message":"invalid course id"})
}
})


})


router.post("/courses/:courseid",(req,res)=>{
const username = req.headers.username
const password = req.headers.password
user.findOneAndUpdate({username:username},{$push:{PurchasedCourses:req.params.courseid}}).
then((value)=>{
    console.log(value)
    res.status(200).send("course purchased successfully")
})
.catch(()=>{
    res.status(400).send("unable to make the transaction ")
})
})

router.post("/purchasedCourses",userMiddleware,async (req,res)=>{
const username = req.headers.username
const data = await user.findOne({username:username})
console.log(data)
const courses = await course.find({_id:{"$in":data.PurchasedCourses}})
res.json({
    PurchasedCourse:courses
})
})

module.exports=router;