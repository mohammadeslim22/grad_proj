const Sequelize = require('sequelize')

module.exports = sequelize.define("cars_transactions", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    carNumber: {
        type: Sequelize.STRING(10),
        allowNull: false,
    },
    carId: {
        type: Sequelize.STRING(10),
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    transaction_time: {
        type: Sequelize.DATE,
    },
    transactionType: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    }
}, {underscored: true})
