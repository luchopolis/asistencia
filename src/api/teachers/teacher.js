'use strict';
const {
  Model
} = require('sequelize');
const connect = require('../../services/sequelize/index')
const { DataTypes } = require('sequelize'); 
const sequelize = connect.connect()

class Teacher extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};

Teacher.init({
  first_name: DataTypes.STRING,
  last_name: DataTypes.STRING,
  code: DataTypes.STRING,
  address: DataTypes.STRING,
  phone_number: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Teacher',
});

module.exports = Teacher