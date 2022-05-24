"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  test.init(
    {
      name: DataTypes.STRING,
      class: DataTypes.STRING,
      testType: DataTypes.STRING,
      score: DataTypes.STRING,
      results: DataTypes.ARRAY(DataTypes.TEXT),
      filename: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "test",
    }
  );
  return test;
};
