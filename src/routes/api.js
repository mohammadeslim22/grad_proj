const express = require('express');
const router = express.Router();
const CarController = require('../controllers/cars_controller')
const UsersController = require('../controllers/user_controller')
const TransactionsController = require('../controllers/transaction_controller')
const InvoiceController = require('../controllers/invoice_controller')
const SettingController = require('../controllers/setting_controller')
const AuthController = require('../controllers/auth_controller')

resource = (controller, router,resource) => {
    
    router.get(`/${resource}/`, controller.index);
    router.get(`/${resource}/:id`, controller.show);
    router.post(`/${resource}/`, controller.store);
    router.put(`/${resource}/:id`, controller.update);
    router.delete(`/${resource}/:id`, controller.delete);
   
}
router.post(`/users/login`,AuthController.login)
resource(CarController, router,'cars');
resource(UsersController, router,'users');
resource(TransactionsController, router,'transactions');
resource(InvoiceController, router,'invoice');
resource(SettingController, router,'settings');

module.exports = router;
