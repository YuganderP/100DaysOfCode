const {user}= require("../DB")

function userMiddleware(req,res,next){
const username = req.headers.username
const password = req.headers.password
    user.find({username:username,password:password}).then((value)=>{
        next()
    }).catch((error)=>{
        res.status(403).send("Invalid Username / Password")
    })


}

module.exports = userMiddleware