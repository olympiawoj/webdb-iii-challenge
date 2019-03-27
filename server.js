//Step 1: Configure the server

const express = require("express");

const server = express();
server.use(express.json());

//Config root test endpoint
server.get("/", (req, res) => {
  res.send("testing the server");
});

module.exports = server;
