'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('users', 'first_name', {
        type: Sequelize.STRING(20),
        allowNull: false,
      }),
      queryInterface.addColumn('users', 'last_name', {
        type: Sequelize.STRING(20),
        allowNull: false,
      }),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([queryInterface.removeColumn('invoices', 'total_hours')]);
  }
};
