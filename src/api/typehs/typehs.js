'use strict';
// Tipos de bachillerato, general o técnico
// 1 - general
// 2 - tecnico

// usada para relacionar la table optionsHs
// optionsHs es donde se guardan el bachillerato como, desarrollo de software o contaduria
// por defecto todos son tecnicos
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TypeHs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  TypeHs.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TypeHs',
  });
  return TypeHs;
};