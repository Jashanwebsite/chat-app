const express = require("express")
const Messages = require("../schemas/messages");
const fetchdetails = require("../middleware/fetchdetails");
const User = require("../schemas/User");
const router = express.Router()
 
router.post("/fetchmessages",fetchdetails,async(req,res)=>{
    const user =await User.findById(req.user)
    const limit =  await req.body.limit
    if(!user){
       return res.status(404).send("user not found")
    }
    try {
        const {room_id} = req.body;
        if(!room_id){
          return  res.status(404).send("PLEASE ENTER ROOM ID TO CONTINUE")
        }
        const messages = await Messages.find({to:room_id}).limit(limit)
        const reverse_message =  await messages.reverse();
        res.json(reverse_message)
    } catch (error) {
        console.log(error)
    }
})
router.post("/addmessages",fetchdetails,async(req,res)=>{
    try {
        const user =await User.findById(req.user)
        if(!user){
            return res.status(404).send("user not found")
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

router.post("/deletemessages",fetchdetails,async(req,res)=>{
    try {
        const user =await User.findById(req.user)
        if(!user){
            return res.status(404).send("user not found")
        }
        const message_id =  req.body.message_id
        const from =   req.body.from
        if(req.user == from){
            const deleted_message = await Messages.findByIdAndDelete({"_id":message_id})
            res.json(deleted_message)
        }
         
    } catch (error) {
        console.log(error)
    }
})
module.exports = router