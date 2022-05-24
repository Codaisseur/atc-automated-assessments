"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("submissions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      class: {
        type: Sequelize.STRING,
      },
      score: {
        type: Sequelize.STRING,
      },
      questions: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
      },
      filename: {
        type: Sequelize.STRING,
      },
      testId: {
        type: Sequelize.INTEGER,
        refernces: {
          type: "tests",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("submissions");
  },
};
