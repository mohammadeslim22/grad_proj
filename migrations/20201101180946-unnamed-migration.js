'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("cars", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      car_number: {
        type: Sequelize.STRING(10),
        allowNull: false,
        unique: true
      },

      status: {
        type: Sequelize.INTEGER(1),
        default: 0
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Cars");
  }
};
