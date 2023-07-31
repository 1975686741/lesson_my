const Model = require('../model'); //  模型
const { Manufacturer } = Model

const manufacturerController = {
    all(req, res, next) {
        // where 
        Manufacturer.find({})
            .exec((err, manufacturers) => {
                if (err) {
                    next(err);
                } else {
                    res.json(manufacturers);
                }
            })
    },
    byId(req, res) {
        const idParams = req.params.id;
        Manufacturer
            .findOne({_id: idParams})
            .exec((err, manufacturer) => res.json(manufacturer))
    },
    create(req, res) {
        const requestBody = req.body;
        // res.json(requestBody)
        const newManufacturer = new Manufacturer(requestBody)
        newManufacturer.save((err, saved) => {
            Manufacturer
                .findOne({_id: newManufacturer._id })
                .exec((err, manufacturer) => res.json(manufacturer))
        })
    },
    update(req, res) {
        const idParams = req.params.id;
        let manufacturer = req.body;
        Manufacturer.updateOne({_id: idParams}, { ...manufacturer }, 
            (err, updated) => {
            res.json(updated)
        })
    },
    remove(req, res) {
        const idParams = req.params.id;
        Manufacturer.findOne(
            { _id: idParams }
        ).remove((err, removed) => res.json(idParams))
    }
}

module.exports = manufacturerController