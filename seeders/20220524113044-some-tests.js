"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tests",
      [
        {
          title: "ATC JS Array Methods",
          amountOfQuestions: 6,
          key: "js1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "ATC JS Server",
          amountOfQuestions: 6,
          key: "js2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tests", null, {});
  },
};
