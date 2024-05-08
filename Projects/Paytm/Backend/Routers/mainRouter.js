const {Router}= require("express")
const router = Router()
const userRoute = require("./userRouter")
router.use("/api/v1",userRoute)

module.exports = router