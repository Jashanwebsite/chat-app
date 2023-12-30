const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const  mongoconnect = require("./db");
const app = express();
const port = 5000;
mongoconnect();
// Add this middleware to parse JSON in the request body
app.use(express.json());
app.use("/auth", require("./auth/User"));

const httpServer = createServer(app);

const io = new Server(httpServer);

io.on("connection", (socket) => {
  console.log("A user connected");

});
// io.attach(httpServer);

// Attach Socket.io to the HTTP server

httpServer.listen(5000, () => {
  console.log(`chat app listening at http://localhost:${port}`);
});