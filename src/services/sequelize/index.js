const { Sequelize } = require('sequelize')

class Connection {
    connect(){
        const sequelize = new Sequelize('asistencias', 'root', '', {
            host: 'localhost',
            dialect: 'mysql'
        });
        
        return sequelize
    }
}

module.exports = new Connection()