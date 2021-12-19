'use strict';
const {
  Model
} = require('sequelize');
const connect = require('../../services/sequelize/index')
const { DataTypes } = require('sequelize'); 
const sequelize = connect.connect()
const UserStudents = require('../users_students/model');

class Student extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {

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


Student.hasOne(UserStudents, { foreignKey: 'student_id'})

Student.prototype.template = (student, extra = false,fields) => {
  
  let template = {
    first_name: student.first_name,
    last_name: student.last_name,
    code: student.code,
    address: student.address,
    phone_number: student.phone_number
  }
 
  if(extra){
    let getFields = fields.split('.')
    let data = student[getFields[0]][getFields[1]]
    
    template[`${getFields[1]}`] = data
  }
  return template
}
module.exports = Student