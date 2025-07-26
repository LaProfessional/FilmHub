'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'john',
        lastName: 'holla',
        email: 'test@test.com',
        password: '$2b$10$SPeTBNyy/ZHyAjwqr19LyOFpbxpU4zC2uW2B5eFgRTUdwOqyN9wxS',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
