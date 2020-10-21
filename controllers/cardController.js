const Card = require("../models/Card");

class cardController{
    static createCard(req, res, next){
        const {chooseItem} = req.body;
        const card = new Card({
            _customerId: req._customerId,
            chooseItem: chooseItem,
        })
        card.save()
        .then((card) =>{
            res.status(201).json({
                msg: 'Success add Card',
                data: card,
            })
        })
        .catch(next);
    }
}

module.exports = cardController;