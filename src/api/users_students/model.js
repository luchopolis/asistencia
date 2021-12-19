'use strict';
const connect = require('../../services/sequelize/index')
const { DataTypes } = require('sequelize') 
const sequelize = connect.connect()

const {
  Model
} = require('sequelize');
const Student = require('../students/model');
const User = require('../users/model');

class UserStudents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
};

UserStudents.init({
    user_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserStudents',
});


UserStudents.belongsTo(User,{ foreignKey: 'user_id'})
//UserStudents.belongsTo(User, { foreignKey: 'user_id'})

module.exports = UserStudents