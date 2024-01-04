const express = require("express")
const router = express.Router()
const rooms = require("../schemas/rooms")
const mongoose = require("mongoose")
const fetchdetails = require("../middleware/fetchdetails")
const User = require("../schemas/User")
router.get("/findroom", fetchdetails, async (req, res) => {
    try {
        const room = await rooms.find({ user_id: req.user })
        res.json(room)
    } catch (error) {
        console.log(error)
    }
})
router.post("/joinroom", fetchdetails, async (req, res) => {
    try {
        const user = await User.findById(req.user);
        if (!user) {
            return res.status(404).send("User not found");
        }

        const { room_id } = req.body;

        // Check if the room already exists
        const existingRoom = await rooms.findOne({ room_id });

        if (!existingRoom) {
            return res.status(404).send("Room not found");
        }

        // Check if the user has already joined the room
        const userInRoom = await rooms.findOne({ room_id, user_id: user._id });

        if (userInRoom) {
            return res.status(400).send("User already in the room");
        }
        console.log("Room ID:", room_id);
        console.log("Existing Room:", existingRoom);

        // Create a new document representing the user joining the room
        const joinroom = await rooms.create({
            room_name: existingRoom.room_name,
            room_id: existingRoom.room_id,
            username: user.name,
            user_id: user._id,
        });

        res.json(joinroom);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal Server Error");
    }
});

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