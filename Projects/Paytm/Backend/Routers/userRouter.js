const {Router}= require("express")
const {User,Account}= require("../DB")
const zod = require("zod")
const router = Router()
const JWT_SECRET = require("../config")
const jwt = require("jsonwebtoken")
router.post("/signup",async(req,res)=>{
// create zod schema
// safeparse the zod schema 
// check if the user already exits 
// generate jwt token 
// send the user id and jwt token.

const signUpSchema = zod.object({
    username:zod.string(),
    password:zod.string(),
    firstname:zod.string(),
    email:zod.string().email()
})

const {success}=signUpSchema.safeParse(req.body)

if(!success){
    
return res.status(400).json({
            "message":"user already exists"
        })
}


const data = await User.find({username:req.body.username,email:req.body.email})

    if(data.length>0){
     return   res.status(400).json({
            "message":"user already exists"
        })}

        let token=""
        token =  jwt.sign({userId:req.body.email},JWT_SECRET)
        const user = await User.create(req.body)
        const account = await Account.create({"userId":user._id,Balance: Math.round((1+ Math.random()*1000),2)})
        res.status(200).json({"userId":user._id,"token":token,"Balance":account.Balance})




})
router.get("/signin",(req,res)=>{
    const username=req.body.username
    const password = req.body.password

    
})
router.put("/update",(req,res)=>{
    res.send("In the update route")
})
router.get("/bulk",(req,res)=>{
    res.send("In the bulk  route")
})

module.exports = router