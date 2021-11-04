const { CSlider } = require("./../../../models/CSlider");


module.exports.getCSliders = (req, res, next) => {
    CSlider.find()
        .then(cSliders => res.status(200).json(cSliders))
        .catch(err => res.status(500).json(err))
}

module.exports.createCSlider = (req, res, next) => {
    const { Image } = req.body;

    CSlider.create({ Image })
        .then(song => res.status(200).json(song))
        .catch(err => res.status(500).json(err))
}

module.exports.deleteCSliderById = (req, res, next) => {
    const { id } = req.body;

    CSlider.deleteOne({ _id: id })
        .then(() => res.status(200).json({ Message: "Deleted!" }))
        .catch(err => console.log(err))
}
