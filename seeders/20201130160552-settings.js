'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('settings', [{
      name : 'Company Name',
      setting_code : 'company_name',
      value : 'Parking Billing System',
    },
    {
      name : 'Hourly Rate',
      setting_code : 'hour_rate',
      value : '0.5',
    },
    {
      name : 'Address',
      setting_code : 'address',
      value : 'Parking Billing System Address',
    },
    {
      name : 'Mobile',
      setting_code : 'mobile',
      value : '+972567505238',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {

  }
};
