'use strict';
const connect = require('../../services/sequelize/index')
const { DataTypes } = require('sequelize') 
const sequelize = connect.connect()

const {
  Model
} = require('sequelize');

class UserStudents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserStudents.belongsTo(models.Student, { constraints: true, foreignKey: 'student_id'})
    }
};

UserStudents.init({
    user_id: DataTypes.INTEGER,
    student_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserStudents',
});

module.exports = UserStudents