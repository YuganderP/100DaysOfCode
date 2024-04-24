const {z} = require("zod")

function UserCredentials(req,res,next){
    const data = req.body
    const userSchame = z.object({username:z.string(),password:z.string()})
    const response = userSchame.safeParse(data)
    if(response.success) next()
    else{
        throw new Error("invalid  credentials sent")
    }
    
}

module.exports = UserCredentials