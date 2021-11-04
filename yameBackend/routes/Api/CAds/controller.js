const { CAds } = require("./../../../models/cAds");


module.exports.getCAdss = (req, res, next) => {
    CAds.find()
        .then(cAdss => res.status(200).json(cAdss))
        .catch(err => res.status(500).json(err))
}

module.exports.createCAds = (req, res, next) => {
    const { Image } = req.body;

    CAds.create({ Image })
        .then(song => res.status(200).json(song))
        .catch(err => res.status(500).json(err))
}

module.exports.deletecAdsById = (req, res, next) => {
    const { id } = req.body;

    CAds.deleteOne({ _id: id })
        .then(() => res.status(200).json({ Message: "Deleted!" }))
        .catch(err => console.log(err))
}
