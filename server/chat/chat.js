const rooms = require("../schemas/rooms")
module.exports = function(io){
  // connection socket for message  data
  io.on("connection", (socket) => {
    console.log("user joined with",socket.id)
    socket.on("joined_room", (room_id) => {
      console.log(`user joined with id ${socket.id} in room ${room_id}`)
      socket.join(room_id)
    })
    socket.on("sendmessage",(datamessage)=>{
      console.log( datamessage , socket.id)  
      socket.to(datamessage.room_id).emit("recievedmessage",datamessage)
    })
    socket.on("disconnect", () => {
      console.log(`user disconnected with id ${socket.id}`)
    })
  })
}