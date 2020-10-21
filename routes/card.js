const router = require('express').Router();
const card = require('../controllers/cardController');

router.post('/createcard', card.createCard);

module.exports = router;