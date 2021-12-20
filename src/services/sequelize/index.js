const { Sequelize } = require('sequelize')
const config = require('../../../config/config.json')


class Connection {
    connect(){
        const sequelize = new Sequelize('asistencias', 'root', config.development.password, {
            host: 'localhost',
            dialect: 'mysql'
        });
        
        return sequelize
    }
}

module.exports = new Connection()