'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("cars_transactions", {
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
      // car_id: {
      //   type: Sequelize.INTEGER(11),
      //   allowNull: false,
      // },
      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,

      },
      car_number: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,

      },
      transaction_time: {
        type: Sequelize.DATE,
        default: Sequelize.DATE.NOW

      },
      transaction_type: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("CarsTransactions");
  }
};
