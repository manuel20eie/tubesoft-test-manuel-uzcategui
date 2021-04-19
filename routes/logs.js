const express = require("express");
const db = require("../models/index.js");

const router = express.Router();

router.post("/", async (req, res) => {
  let duration = req.headers["duration"];
  await db.Logs.create({
    duration: duration,
  })
    .then((log) => {
      return res.send({ message: "Log saved", log: log });
    })
    .catch((error) => {
      return res.send({ message: "Request Error", error: error });
    });
});

module.exports = router;
