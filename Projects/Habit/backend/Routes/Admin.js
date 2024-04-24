const {Router} = require("express")
const { route } = require("./Todo")
const AdminCredentialsCheck = require("../Middleware/AdminCredentials")
const{admin} = require("../DB/")
const router = Router()

module.exports = router
router.use(AdminCredentialsCheck)

router.post("/signup",(req,res)=>{
 admin.create({
  username:req.body.username,
  password:req.body.password
 }).then((value)=>{
    res.status(200).send("New user has bbeen created")
 }).catch((error)=>{
   console.log("error")
   res.status(500).send("error")
 })

})


function GlobalCatches(err,req,res,next){

res.send(err)


}
router.use(GlobalCatches)