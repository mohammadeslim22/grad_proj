const Sequelize = require('sequelize')

module.exports = sequelize.define("Car", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    carNumber: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true
    },

    status: {
        type: Sequelize.INTEGER(1),
        
    },
}, {underscored: true})