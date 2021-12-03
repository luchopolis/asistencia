'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OptionsHs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OptionsHs.init({
    name: DataTypes.STRING,
    typeHs_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OptionsHs',
  });
  return OptionsHs;
};