const express = require("express");
const cors = require("cors");
const models = require("./models");
const app = express();
const server = require("http").Server(app);
const routes = require("./routes");

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
routes(app);

models.sequelize
  .sync({ logging: false, operatorsAliases: false, force: false })
  .then(() => {
    server.listen(3000);
  });
