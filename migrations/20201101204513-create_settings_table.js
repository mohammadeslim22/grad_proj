'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("settings", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      organization_name: {
        type: Sequelize.STRING(50),
        allowNull: true,

      },
      organization_address: {
        type: Sequelize.STRING(100),
        allowNull: true,

      },

      organization_trn: {
        type: Sequelize.STRING(20),
        allowNull: true,

      },

      organization_phone: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },

      organization_mobile: {
        type: Sequelize.STRING(10),
        allowNull: true,
      },

      hour_hate: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Settings");
  }
};
