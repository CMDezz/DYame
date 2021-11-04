const { CDiscount } = require("./../../../models/CDiscount");


module.exports.getCDiscounts = (req, res, next) => {
    CDiscount.find()
        .then(cDiscounts => res.status(200).json(cDiscounts))
        .catch(err => res.status(500).json(err))
}

module.exports.createCDiscount = (req, res, next) => {
    const { Image } = req.body;

    CDiscount.create({ Image })
        .then(song => res.status(200).json(song))
        .catch(err => res.status(500).json(err))
}

module.exports.deleteCDiscountById = (req, res, next) => {
    const { id } = req.body;

    CDiscount.deleteOne({ _id: id })
        .then(() => res.status(200).json({ Message: "Deleted!" }))
        .catch(err => console.log(err))
}
