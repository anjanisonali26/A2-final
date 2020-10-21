const router = require('express').Router();
const Product = require('../controllers/productController');


router.post('/:id', Product.createProduct);

module.exports = router;