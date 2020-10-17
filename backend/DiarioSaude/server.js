const User = require("./src/User.model");
const express = require("express");

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
const connectDb = require("./src/connection");

app.get("/users", (req, res) => {
  res.send("Get users /n");
});

app.get("/user-create", (req, res) => {
  res.send("User created /n");
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

app.get("/users", async (req, res) => {
 const users = await User.find();
});

app.get("/user-create", async (req, res) => {
  const user = new User({ username: "userTest" });
});
