const  mongoose = require("mongoose");
const {Schema} = mongoose
const User = new Schema({
    name:{
        type : String,
        required : true,
    },
    email:{
        type : String,
        required : true,
    },
    password:{
        type : String,
        required : true,
    },
    date:{
        type : Date,
        default : Date.now,
    },
})
const user = mongoose.model("user",User)
module.exports = user