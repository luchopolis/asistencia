'use strict';
const {
  Model
} = require('sequelize');

const connect = require('../../services/sequelize/index')
const { DataTypes } = require('sequelize'); 
const sequelize = connect.connect()

class UserTeachers extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};


UserTeachers.init({
  user_id: DataTypes.INTEGER,
  teacher_id: DataTypes.INTEGER
}, {
  sequelize,
  modelName: 'UserTeachers',
});

module.exports = UserTeachers