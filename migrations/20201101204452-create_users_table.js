'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      emp_user_name: {
        type: Sequelize.STRING(50),
        allowNull: false,
        unique:true

      },
      emp_password: {
        type: Sequelize.STRING(70),
        allowNull: false,

      },
      emp_name: {
        type: Sequelize.STRING(50),
        allowNull: true,

      },
      emp_address: {
        type: Sequelize.STRING(100),
        allowNull: true,

      },
      role:{
        type: Sequelize.INTEGER(1),
        allowNull: false,
        default:0
      },
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE,
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Users");
  }
};
