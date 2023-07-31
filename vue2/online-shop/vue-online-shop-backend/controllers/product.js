const Model = require('../model'); //  模型
const { Product } = Model

const productController = {
    all(req, res) {
        Product.find({})
            .populate('manufacturer')
            .exec((err, products) => res.json(products))
    },
    byId(req, res){},
    create(req, res){},
    update(req, res){},
    remove(req, res){}
}

module.exports = productController