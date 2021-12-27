'use strict';
const {
  Model
} = require('sequelize');
const connect = require('../../services/sequelize/index')
const { DataTypes } = require('sequelize'); 
const sequelize = connect.connect()

class CourseSchedule extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};

CourseSchedule.init({
  group_id: DataTypes.INTEGER,
  Monday: DataTypes.BOOLEAN,
  Tuesday: DataTypes.BOOLEAN,
  Wednesday: DataTypes.BOOLEAN,
  Thursday: DataTypes.BOOLEAN,
  Friday: DataTypes.BOOLEAN
}, {
  sequelize,
  modelName: 'CourseSchedule',
});

module.exports = CourseSchedule