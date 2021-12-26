'use strict';
const connect = require('../../services/sequelize/index')
const { DataTypes } = require('sequelize')
const sequelize = connect.connect()


const {
  Model
} = require('sequelize');

class RegisterCodes extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
};

RegisterCodes.init({
  code: DataTypes.STRING,
  expiration: DataTypes.DATE
}, {
  sequelize,
  modelName: 'RegisterCodes',
});


module.exports = RegisterCodes