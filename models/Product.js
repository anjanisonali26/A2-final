const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({ 
    _categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true,
    },
    itemname: {
        type: String,
        require: true,
    },
     tumbnail:{
         type: String,
         require: true,
     },
     image:{ 
         type: String,
         require: true,
     },
     describe: {
         type: String,
         require: true,
     },
     price: {
         type: Number,
         require: true,
     },
     amount: {
         type: Number,
         require: true,
     },
     shortdescription:{
        type: String,
        require: true,
     },
     publish: {
         type: String,
         default: Date.now()
     },
});


const Product = mongoose.model("Product", productSchema);
module.exports = Product;