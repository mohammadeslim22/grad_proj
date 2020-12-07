const Sequelize = require('sequelize')

module.exports = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    empUserName: {
        type: 
        Sequelize.STRING(50),
        allowNull: false,
        unique:true

    },
    empPassword: {
        type: Sequelize.STRING(70),
        allowNull: true,

    },
    empName: {
        type: Sequelize.STRING(50),
        allowNull: true,

    },
    empAddress: {
        type: Sequelize.STRING(100),
        allowNull: true,

    },
    role:{
        type:Sequelize.INTEGER(1),
        allowNull: false,
    },
    firstName: {
        type: Sequelize.STRING(50),
        allowNull: true,

    },
    lastName: {
        type: Sequelize.STRING(50),
        allowNull: true,

    },

}, {underscored: true})