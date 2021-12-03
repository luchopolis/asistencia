const connect = require('../../services/sequelize/index')
const { DataTypes } = require('sequelize') 
const sequilize = connect.connect()

const prueba = sequilize.define('Prueba',{
    nombre:{
        type:DataTypes.STRING,
        defaultValue: 'Luis'
    },
    ape:{
        type:DataTypes.STRING
    },
    ciudad:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true,
    timestamps: false,
});

const getModel = () => sequilize.models

module.exports = {prueba, getModel}
