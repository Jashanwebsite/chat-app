const express = require("express")
const Messages = require("../schemas/messages");
const fetchdetails = require("../middleware/fetchdetails");
const User = require("../schemas/User");
const router = express.Router()
 
router.get("/fetchmessages",fetchdetails,async(req,res)=>{
    const user =await User.findById(req.user)
    if(!user){
        res.status(404).send("user not found")
    }
    try {
        const {room_id} = req.body;
        const messages = await Messages.find({room_id})
        res.json(messages)
    } catch (error) {
        console.log(error)
    }
})
router.post("/addmessages",fetchdetails,async(req,res)=>{
    try {
        const user =await User.findById(req.user)
        if(!user){
            res.status(404).send("user not found")
        }
        const {to,message}= req.body
        const create_message = await Messages.create({
            to: to,
            message:message,
            username:user.name,
            from:user._id
        })
        res.json(create_message)
    } catch (error) {
        console.log(error)
    }
})
module.exports = router