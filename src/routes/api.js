const express = require('express');
const router = express.Router();
const CarController = require('../controllers/cars_controller')
const UsersController = require('../controllers/user_controller')
const TransactionsController = require('../controllers/transaction_controller')
const InvoiceController = require('../controllers/invoice_controller')
const SettingController = require('../controllers/setting_controller')
const AuthController = require('../controllers/auth_controller')
const StatisticsController = require('../controllers/statistics')


resource = (controller, router,resource) => {
    
    router.get(`/${resource}/`, controller.index);
    router.get(`/${resource}/:id`, controller.show);
    router.post(`/${resource}/`, controller.store);
    router.post(`/${resource}/:id`, controller.update);
    router.delete(`/${resource}/:id`, controller.delete);
   
}
router.post(`/users/login`,AuthController.login);
router.post(`/settings`, SettingController.update);
router.get(`/statistics`,StatisticsController.index);
router.get(`/transactions/timeline`,TransactionsController.timeline);
resource(CarController, router,'cars');
resource(UsersController, router,'users');
resource(TransactionsController, router,'transactions');
resource(InvoiceController, router,'invoices');
resource(SettingController, router,'settings');

module.exports = router;
