const router = require('express').Router();
const addressController = require('../controllers/addressController');


router.post('/create', addressController.addressCreate);
router.put('/modify/:CustomerId', addressController.addressModify);
router.delete('/delete/:Id', addressController.addressDelete);
router.get('/list', addressController.listAll);
router.get('/list/:Id', addressController.getAddresscustomer);

module.exports = router;