'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('invoices', 'cars_transaction_id', {

        type: Sequelize.INTEGER(11),
        allowNull: false,

      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('invoices', 'cars_transaction_id')]);
  }
};
