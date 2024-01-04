const mongoose = require("mongoose");
const nanoid = require("nanoid")
const { Schema } = mongoose
const Room = new Schema({
    room_name: {
        type: String,
        required: true,
    }, 
    room_id: {
        type: String,
        default: () => nanoid.nanoid(20),
        required: true,

    },
    username: {
        type: String,
        ref: 'user',
        field : "name",
        required:true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required:true
    },
    date: {
        type: Date,
        default: Date.now,
    },
})
const rooms = mongoose.model("rooms", Room)
module.exports = rooms