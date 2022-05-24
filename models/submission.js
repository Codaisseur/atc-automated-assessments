"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class submission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      submission.belongsTo(models.test, { foreignKey: "testId" });
    }
  }
  submission.init(
    {
      name: DataTypes.STRING,
      class: DataTypes.STRING,
      score: DataTypes.STRING,
      questions: DataTypes.ARRAY(DataTypes.TEXT),
      filename: DataTypes.STRING,
      testId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "submission",
    }
  );
  return submission;
};
