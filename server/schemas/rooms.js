const  mongoose = require("mongoose");
const {Schema} = mongoose
const Room = new Schema({
    room_name:{
        type : String,
        required : true,
    },
    room_id:{
        type : String,
        required : true,
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