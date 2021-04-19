"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Log extends Model {
    static associate(models) {
      // define association here
    }
  }
  Log.init(
    {
      duration: DataTypes.FLOAT,
    },
    {
      sequelize,
      modelName: "Logs",
    }
  );
  return Log;
};
