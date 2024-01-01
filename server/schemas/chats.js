const  mongoose = require("mongoose");
const {Schema} = mongoose
const Room = new Schema({
    room_name:{
        type : String,
        ref : "Room",
    },
    room_id:{
        type : String,
        ref : "Room",
    },
    message:{
        type : String,
       required:true,
    },
    date:{
        type : Date,
        default : Date.now,
    },
})
const rooms = mongoose.model("rooms",Room)
module.exports = rooms