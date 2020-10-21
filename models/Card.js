const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({ 
    _customerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer',
        require: true,
    },
    chooseItem: {
        type: String,
    }
})

const Card = mongoose.model("Card", cardSchema);
module.exports = Card;