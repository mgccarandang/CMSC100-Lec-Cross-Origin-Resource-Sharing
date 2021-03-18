const express = require("express");
const server2 = express()

server2.get("/",
  (req, res) => {
    res.sendFile(__dirname + "/index2.html");
  })

server2.listen(3001);