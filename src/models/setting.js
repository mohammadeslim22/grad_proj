const Sequelize = require('sequelize')

module.exports = sequelize.define("Setting", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: Sequelize.STRING(50),
        allowNull: true,

    },
    SettingCode: {
        type: Sequelize.STRING(100),
        allowNull: false,

    }, 
    
    value: {
        type: Sequelize.STRING(50),
        allowNull: false,

    },
}, {underscored: true})