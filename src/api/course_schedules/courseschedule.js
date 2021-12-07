'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
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
  return CourseSchedule;
};