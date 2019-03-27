//Step 1: Configure the server

const express = require("express");
const server = express();

const cohortsRouter = require("./cohorts/cohorts-router.js");
server.use(express.json());

//Config root test endpoint
server.get("/", (req, res) => {
  res.send("testing the server");
});

server.use("/api/cohorts", cohortsRouter);
module.exports = server;
