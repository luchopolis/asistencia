'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CourseSchedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      group_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Groups'
          },
          key:'id'
        }
      },
      Monday: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      Tuesday: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      Wednesday: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      Thursday: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      Friday: {
        type: Sequelize.BOOLEAN,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CourseSchedules');
  }
};