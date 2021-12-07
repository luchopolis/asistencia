'use strict';
const {
  Model
} = require('sequelize');
const connect = require('../../services/sequelize/index')
const { DataTypes } = require('sequelize') 
const sequelize = connect.connect()

class Student extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    Student.hasOne(models.Users)
    Student.hasOne(models.Student_attendance)
  }
};

Student.init({
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  code: DataTypes.STRING,
  address: DataTypes.STRING,
  phone_number: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Student',
});

Student.prototype.template = (student) => {
  return {
    first_name: Student.first_name,
    last_name: Student.last_name,
    code: Student.code,
    address: Student.address,
    phone_number: Student.phone_number
  }
}
module.exports = Student