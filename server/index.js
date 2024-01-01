const express = require("express");
const { Server } = require("socket.io");
const mongoconnect = require("./db");
const cors = require("cors");
const app = express();

const port = 5000;
const user = {}
mongoconnect();
app.use(cors())
app.use(express.json());
app.use("/auth", require("./auth/User"));
const httpServer = require('http').createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*", // specify the allowed origin
    // methods: ["GET", "POST"] // specify the allowed HTTP methods
  }
  , transports: ["websocket", "polling"]
});


io.on("connect", (socket) => {
  socket.on("user-joined", (receivedMessage) => {
    console.log("Received user-joined:", receivedMessage);
    socket.broadcast.emit("message", receivedMessage);
  })})


httpServer.listen(5000, () => {
  console.log(`Chat app listening at http://localhost:${port}`);
})
