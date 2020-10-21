const router = require('express').Router();
const customerRoutes = require('./customer');
const addressController = require('./address');
const categoryController = require('./category');
const productController = require('./product');
const cardController = require('./card');
const errorHandler = require('../middlewares/errorHandlers');
const authentication = require('../middlewares/authentication')


router.use('/customers', customerRoutes);
router.use(authentication);
router.use('/address', addressController);
router.use('/product', productController);
router.use('/category', categoryController);
router.use('/card', cardController);
router.use(errorHandler);



module.exports = router;

