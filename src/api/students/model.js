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
    Student.hasOne(models.UserStudents, { foreignKey: 'student_id', constraints: true})
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
  console.log(student.getUserStudents())
  return {
    first_name: student.first_name,
    last_name: student.last_name,
    code: student.code,
    address: student.address,
    phone_number: student.phone_number
  }
}
module.exports = Student