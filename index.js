const express = require("express");
const server = express();
const PORT = 3000;
const pg = require("pg");

var pool = new pg.Pool();
pool.connect(function (err, client, done) {
  done();
});

server.listen(PORT, () => console.log(`Server running on ${PORT}`));
server.get("/", (req, res) => res.status(200).send("hello"));
