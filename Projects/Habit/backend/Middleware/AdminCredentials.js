// import {zod} from "zod";
const {z}=require("zod")


function  AdminCredentialsCheck(req,res,next){


const Admin = z.object({
    username:z.string().email(),
    password:z.string()
})
console.log(req.body)
const data =Admin.safeParse(req.body)
console.log(data)
if(data.success){
    next()
}else{
    throw new Error("Invalid Credentials")
}


}


module.exports = AdminCredentialsCheck