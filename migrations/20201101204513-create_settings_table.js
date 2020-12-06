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
      name: {
        type: Sequelize.STRING(50),
        allowNull: true,
      },
      setting_code:{
        type: Sequelize.STRING(100),
        allowNull: true,
        unique:true
      },
      value: {
        type: Sequelize.STRING(50),
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
