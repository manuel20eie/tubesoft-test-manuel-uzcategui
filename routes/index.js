"use strict";

const webRoutes = require("./web");
const logs = require("./logs");

module.exports = (app) => {
  app.use("/", webRoutes);
  app.use("/logs", logs);
};
