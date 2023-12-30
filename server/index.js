const express = require("express");
const  mongoconnect = require("./db");
const app = express();
const port = 5000;
mongoconnect();
// Add this middleware to parse JSON in the request body
app.use(express.json());

app.use("/auth", require("./routes/auth/User"));

app.listen(5000, () => {
  console.log(`chat app listening at http://localhost:${port}/auth/createuser`);
});