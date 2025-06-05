'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Movies', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })

    await queryInterface.addColumn('Categories', 'userId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    })

    await queryInterface.createTable('CategoryMovie', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      categoryId: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
      movieId: {
        type: Sequelize.UUID,
        primaryKey: true,
      },
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Categories', 'userId')

    await queryInterface.removeColumn('Movies', 'userId')

    await queryInterface.dropTable('CategoryMovie')
  },
}
