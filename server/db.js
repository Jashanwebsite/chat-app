const mongo = require("mongoose")
require("dotenv").config();
const MongoUri = process.env.MongoUri
const mongoconnect= async()=>{
    try {
        await mongo.connect(MongoUri)
        console.log("connected to mongo")
        
    } catch (error) {
        console.log(error)
    }


}
module.exports = mongoconnect