const express = require("express")
const zod = require("zod")
// schema to check array of strings
function sample(a){
    const mySchema = zod.array(zod.string())
    const response = mySchema.safeParse(a)
    console.log(response)
}
function sample2(a){
    const mySchema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(7)
    })
    console.log(mySchema.safeParse(a))
}




sample(["hello world"])  

const details = {
    email:"sample@gmail.com",
    password:"12341234"
}

sample2(details)