const mongo = require("mongoose")
const MongoUri = "mongodb://localhost:27017/chat"
const mongoconnect= async()=>{
    try {
        await mongo.connect(MongoUri)
        console.log("connected to mongo")
        
    } catch (error) {
        console.log(error)
    }


}
module.exports = mongoconnect