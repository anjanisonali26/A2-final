const router = require('express').Router();
const categoryController = require('../controllers/categoryController');


router.patch('/:id', categoryController.categorypatch);
// router.put('/modify/:CustomerId', addressController.addressModify);
// router.delete('/delete/:Id', addressController.addressDelete);
// router.get('/list', addressController.listAll);
// router.get('/list/:Id', addressController.getAddresscustomer);

module.exports = router;