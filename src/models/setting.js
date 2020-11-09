const Sequelize = require('sequelize')

module.exports = sequelize.define("Setting", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    organizationName: {
        type: Sequelize.STRING(50),
        allowNull: true,

    },
    organizationAddress: {
        type: Sequelize.STRING(100),
        allowNull: true,

    }, 
    
    organizationTRN: {
        type: Sequelize.STRING(20),
        allowNull: true,

    }, 

    organizationPhone: {
        type: Sequelize.STRING(10),
        allowNull: true,
    }, 

    organizationMobile: {
        type: Sequelize.STRING(10),
        allowNull: true,
    }, 
    
    hourRate: {
        type: Sequelize.DOUBLE(10),
        allowNull: true,
    },
}, {underscored: true})