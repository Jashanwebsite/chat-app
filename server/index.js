const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const mongoconnect = require("./db");
const cors = require("cors")
const app = express();
const port = 5000;
mongoconnect();
app.use(cors())
app.use(express.json());
app.use("/auth", require("./auth/User"));

const httpServer = createServer(app);

const io = new Server(httpServer,{
  cors: {
    origin: "http://localhost:5173", // specify the allowed origin
    methods: ["GET", "POST"] // specify the allowed HTTP methods
  }
});

io.on("connection", (socket) => {
  console.log("Client connected with socket ID:", socket.id);
});

httpServer.listen(5000, () => {
  console.log(`Chat app listening at http://localhost:${port}`);
});
