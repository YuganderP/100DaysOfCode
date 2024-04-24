const {Router} = require("express")
const UserCredentials = require("../Middleware/UserCredentials")
const {users} = require("../DB/index")
const router = Router()
router.use(UserCredentials)

router.post("/signup",(req,res)=>{
    users.findOne({username:req.body.username}).then((user)=>{
        if(user){
          console.log(user)
            res.status(500).send("user already exits")
        }else{
            users.create({
        username:req.body.username,
        password:req.body.password
       }).then((valute)=>{
          res.status(200).send("New user has bbeen created")
       }).catch((error)=>{
         console.log("error")
         res.status(500).send("error")
       })
        }


    })
    
    
})

function GlobalCatchs(err,req,res,next){
    console.log(err)
   res.status(500).send("error")
}
router.use(GlobalCatchs)

module.exports = router
