module.exports = function(io){
  io.on("connection", (socket) => {
    console.log(`user connected with ${socket.id}`)
    socket.on("joined_room", (data) => {
      socket.join(data)
      console.log(` user with id ${socket.id} in room  ${data} `);
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