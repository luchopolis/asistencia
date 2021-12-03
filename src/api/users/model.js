'use strict';

const connect = require('../../services/sequelize/index')
const { DataTypes } = require('sequelize') 
const sequelize = connect.connect()

const {
  Model
} = require('sequelize');

const defaultPassword = 'ESTUDIANTE.01'
class User extends Model {
    static associate(models) {
      // define association here
    }
};


User.init({
  username: DataTypes.STRING,
  password: {
    type: DataTypes.STRING,
    defaultValue: defaultPassword
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, 
{
  sequelize,
  modelName: 'User',
});

module.exports = User
