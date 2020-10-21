const Product = require("../models/Product");
const Category = require("../models/Category");

class productController{
    static createProduct(req, res, next) {
        const{
            itemname,
            tumbnail,
            image,
            describe,
            price,
            amount,
            shortdescription,
        } = req.body;

        const product = new Product({
            _categoryId: req.params.id,
            itemname,
            tumbnail,
            image,
            describe,
            price,
            amount,
            shortdescription
        })
        product.save()
        .then((product)=>{
            res.status(201).json({
                msg: 'Success add Product',
                data: product,
            })
           
        })
        .catch(next);
    }
}


module.exports = productController;