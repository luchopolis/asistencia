'use strict';
const {
  Model
} = require('sequelize');
const connect = require('../../services/sequelize/index')
const { DataTypes } = require('sequelize') 
const sequelize = connect.connect()

class Student_attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Student_attendance.init({
    group_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER,
    date: DataTypes.DATE,
    dateAbsence: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Student_attendance',
  });

module.exports = Student_attendance