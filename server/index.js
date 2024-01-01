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
const  io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods:["Get",['Post']]
  }
  , transports: ["websocket", "polling"]
});
require("./chat/chat")(io)

httpServer.listen(5000, () => {
  console.log(`Chat app listening at http://localhost:${port}`);
})
