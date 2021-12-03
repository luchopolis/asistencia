'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Groups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      period_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Periods'
          },
          key:'id'
        }
      },
      course_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Courses'
          },
          key:'id'
        }
      },
      teacher_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Teachers'
          },
          key:'id'
        }
      },
      optionHs_id : {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'OptionsHs'
          },
          key:'id'
        }
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
    await queryInterface.dropTable('Groups');
  }
};