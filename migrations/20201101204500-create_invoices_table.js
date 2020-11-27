'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("invoices", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      car_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,

      },
      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,

      },
      car_number: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },

      invoice_amount: {
        type: Sequelize.DOUBLE,
      },
      Invoice_hour_number: {
        type: Sequelize.DOUBLE,
        allowNull: false,

      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Invoices");
  }
};
