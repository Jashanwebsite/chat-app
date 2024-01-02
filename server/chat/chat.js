const rooms = require("../schemas/rooms")
module.exports = function(io){
  io.on("connection", (socket) => {
    socket.on("joined_room", async(room_id) => {
      // const  existroom = await rooms.findOne({room_id:room_id})
      // if(existroom){return console.log("user  existed")}
      socket.join(data)
    })
    socket.on("sendmessage",(data)=>{
      console.log(data)
      socket.to(data.room).emit("recievedmessage",data)
    })
    socket.on("disconnect", () => {
      console.log(`user disconnected with id ${socket.id}`)
    })
  })
  
}