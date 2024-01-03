const  mongoose = require("mongoose");
const {Schema} = mongoose
const messages = new Schema({
    to:{
        type :String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    from:{
        type : mongoose.Schema.Types.ObjectId,
        required:true
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
const Message = mongoose.model("messages",messages)
module.exports = Message