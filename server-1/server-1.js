const express = require("express");
const server1 = express()

const setCORSHeader = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  next();
}

server1.get("/",
  (req, res) => {
    res.sendFile(__dirname + "/index1.html");
  })

server1.use("/static", express.static(__dirname + "/assets"));

server1.get("/data",
  setCORSHeader,
  (req, res) => {
    res.send({ "ingredients": [ "flour", "sugar", "eggs", "butter", "chocolate" ]})
  }
)

server1.listen(3000);