const { Type } = require("./../../../models/Type");


module.exports.getTypes = (req, res, next) => {
    Type.find()
        .then(types => res.status(200).json(types))
        .catch(err => res.status(500).json(err))
}

module.exports.createType = (req, res, next) => {
    const { Name } = req.body;

    Type.create({ Name })
        .then(song => res.status(200).json(song))
        .catch(err => res.status(500).json(err))
}

module.exports.deleteTypeById = (req, res, next) => {
    const { id } = req.body;

    Type.deleteOne({ _id: id })
        .then(() => res.status(200).json({ Message: "Deleted!" }))
        .catch(err => console.log(err))
}

module.exports.deleteAll = (req, res, next) => {
    Type.deleteMany()
        .then(() => res.status(200).json({ Message: "Deleted!" }))
        .catch(err => console.log(err))
}