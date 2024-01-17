const express = require("express");
const { Server } = require("socket.io");
const mongoconnect = require("./db");
const cors = require("cors");
const app = express();
require("dotenv").config()

const user = {}
mongoconnect();
app.use(cors())
app.use(express.json());
app.use("/auth", require("./auth/User"));
app.use("/room",require("./auth/findrooms"))
app.use("/messages",require("./auth/messages"))

const httpServer = require('http').createServer(app);
const  io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods:["Get",['Post']]
  }
  , transports: ["websocket", "polling"]
});
require("./chat/chat")(io)
const port = process.env.port 
// console.log()
httpServer.listen(port, () => {
  console.log(`Chat app listening at http://localhost:${port}`);
})
