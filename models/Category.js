const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({ 

    _productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
})

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;