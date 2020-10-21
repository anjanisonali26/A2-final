const Category = require("../models/Category");

class categoryController {
  static categorypatch(req, res, next) {
    const { category } = req.body;
    const kategori = new Category({
      _productId: req.params.id,
      category,
    });
    kategori
      .save()
      .then(function (kategori) {
        res.status(201).json({
          success: true,
          data: kategori,
        });
      })
      .catch(next);
  }
}

module.exports = categoryController;
