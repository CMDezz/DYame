const { Album } = require("./../../../models/Album");

module.exports.getAlbum = (req, res, next) => {
    Album.find()
        .then(album => res.status(200).json(album))
        .catch(err => res.status(500).json(err))
}

module.exports.createAlbum = (req, res, next) => {
    const { Name, Image } = req.body;

    Album.create({ Name, Image })
        .then(album => res.status(200).json(album))
        .catch(err => res.status(500).json(err))
}

module.exports.deleteAlbumByName = (req, res, next) => {
    const { Name } = req.body;

    Album.deleteOne(Name)
        .then(() => res.status(200).json("deleted"))
        .catch(err => res.status(500).json(err))
}
