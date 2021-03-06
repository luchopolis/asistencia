'use strict';
const {
  Model
} = require('sequelize');

const connect = require('../../services/sequelize/index')
const { DataTypes } = require('sequelize'); 
const sequelize = connect.connect()

class Groups extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};

Groups.init({
  name: DataTypes.STRING,
  period_id: DataTypes.INTEGER,
  course_id: DataTypes.INTEGER,
  teacher_id: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'Groups',
});

module.exports = Groups