const router = require('express').Router();
const customerController = require('../controllers/customerController');


router.post('/register', customerController.registercustomer);
router.post('/login', customerController.logincustomer);
router.get('/list', customerController.listCustomer);
router.get('/list/:Id', customerController.getCustomer);
router.put('/modify/:Id', customerController.customerModify);
router.delete('/delete/:Id', customerController.customerDelete);

module.exports = router;