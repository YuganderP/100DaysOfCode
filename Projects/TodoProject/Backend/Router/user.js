const {Router} = require("express")
const router = Router()
const userMiddleware = require("../Middleware/userMiddleware")
const {user,todo} = require("../DB/index")
router.post("/add",(req,res)=>{
    const title = req.body.title
    const description = req.body.description
    const completed = false
    todo.create({title,description,completed}).then((value)=>{
        res.status(200).send("the task has been completed")
    })


})

router.get("/all",(req,res)=>{
todo.find({}).then((value)=>{

    res.status(200).json({"todo": value})
})

})

router.put("/update/:todoID",(req,res)=>{

todo.findById(req.params.todoID).then((todoItem)=>{
    const status = !todoItem.completed
    return todo.findByIdAndUpdate(req.params.todoID,{completed:status})
}).then(()=>{
    res.status(200).send("The task has been updated")
}).catch((error)=>{
    res.status(500).send("An error occured")
})


})


module.exports = router


