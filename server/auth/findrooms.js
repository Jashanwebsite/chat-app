const express = require("express")
const router = express.Router()
const rooms = require("../schemas/rooms")
const mongoose = require("mongoose")
const fetchdetails = require("../middleware/fetchdetails")
const User = require("../schemas/User")
router.get("/findroom", fetchdetails, async (req, res) => {
    try {
        const room = await rooms.find({user_id:req.user})
        res.json(room)
    } catch (error) {
        console.log(error)
    }
})
router.post("/joinroom", fetchdetails, async (req, res) => {
    try {
        const user = await User.findById(req.user)
        if (!user) {
            return res.status(404).send("room existed");
        }
        // const { room_id } = req.body
        // const existroom = await rooms.findOne({ room_id })
        // if (!existroom) {
        //     return res.status(404).send("room not found");
        // }
        const joinroom =  await rooms.create({
            room_name: existroom.room_name,
            room_id: room_id,
            username: user.name,
            user_id: user._id
        })
          res.json(joinroom)
    } catch (error) {
        console.log(error)
    }
})
router.post("/createrooms", fetchdetails, async (req, res) => {
    try {
        const user = await User.findById(req.user)
        if (!user) {
            return res.status(404).send("user not found");
        }
        const { room_name } = req.body
        console.log(req.user)
        // const existroom = await rooms.findOne({ room_id })
        // if (existroom) {
        //     return res.status(404).send("room existed");
        // }
    
        const new_room = await rooms.create({
            room_name: room_name,
            username: user.name,
            user_id: user._id
        });
        res.json(new_room)
    } catch (error) {
        console.log(error)
    }
})
module.exports = router;