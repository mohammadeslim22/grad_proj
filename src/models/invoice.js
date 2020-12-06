const Sequelize = require('sequelize')

module.exports = sequelize.define("Invoice", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    carId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
    },
    userId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,

    },
    carNumber: {
        type: Sequelize.STRING(10),
        allowNull: false,
        
    },

    invoiceAmount: {
        type: Sequelize.DOUBLE,
    },
    InvoiceHourNumber: {
        type: Sequelize.DOUBLE(10),
        allowNull: false,

    },
    totalHours: {
        type: Sequelize.DOUBLE(10),
        allowNull: false,

    }, carsTransactionId: {
        type: Sequelize.DOUBLE(10),
        allowNull: false,

    }

}, { underscored: true })