const { Product } = require("./../../../models/Product");
const { Album } = require("./../../../models/Album");
const { Type } = require("./../../../models/Type");

function shuffle(array) {
    var currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Used like so


module.exports.getProducts = (req, res, next) => {
    Product.find()
        .populate("AlbumId")
        .populate("TypeId")
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json(err))
}

module.exports.createProduct = (req, res, next) => {
    const { Name, AlbumId, TypeId, Price, Detail, Size, Image, SubImage } = req.body;

    Product.create({ Name, AlbumId, TypeId, Price, Detail, Size, Image, SubImage })
        .then(song => res.status(200).json(song))
        .catch(err => res.status(500).json(err))
}

module.exports.deleteProductById = (req, res, next) => {
    const { id } = req.body;

    Product.deleteOne({ _id: id })
        .then(() => res.status(200).json({ Message: "Deleted!" }))
        .catch(err => console.log(err))
}

module.exports.editProductDetailsById = (req, res, next) => {
    const { id } = req.query;
    const { Name, AlbumId, TypeId, Price, Detail, Size, Image, SubImage } = req.body;
    Product.findById(id)
        .then(product => {
            if (!product) Promise.reject("Product not found!");
            if (Name != null) product.Name = Name;
            if (AlbumId != null) product.AlbumId = AlbumId;
            if (TypeId != null) product.TypeId = TypeId;
            if (Price != null) product.Price = Price;
            if (Detail != null) product.Detail = Detail;
            if (Size != null) product.Size = Size;
            if (Image != null) product.Image = Image;
            if (SubImage != null) product.SubImage = SubImage;
            return product.save();
        })
        .then(product => res.status(200).json(product))
        .catch(err => console.log(err))
}

module.exports.setProductAlbumById = (req, res, next) => {
    const { _id, albumId } = req.body;
    Product.findById(_id)
        .then(pro => {
            if (!pro.AlbumId.includes(albumId)) {
                pro.AlbumId = [...pro.AlbumId, albumId]
                pro.save();
            }
            return pro;
        })
        .then(products => res.status(200).json(products))
        .catch(err => console.log(err))
}


module.exports.setProductTypeById = (req, res, next) => {
    const { _id, typeId } = req.body;
    Product.findById(_id)
        .then(pro => {
            if (!pro.TypeId.includes(typeId)) {
                pro.TypeId = [...pro.TypeId, typeId]
                pro.save();
            }
            return pro;
        })
        .then(products => res.status(200).json(products))
        .catch(err => console.log(err))
}





module.exports.searchProduct = (req, res, next) => {
    const { search } = req.query;

    Product.find({ Name: { $regex: new RegExp(search, 'i') } })
        .populate("TypeId")
        .populate("AlbumId")
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json(err))
}


module.exports.getProductsByAlbum = (req, res, next) => {
    const { Name } = req.query;
    Product.find()
        .populate("TypeId")
        .populate({
            path: "AlbumId",
            match: {
                Name: Name
            }
        })
        .then(products => {
            return products.filter((product) => product.AlbumId.length > 0)
        })
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json(err))
}

module.exports.getProductsByType = (req, res, next) => {
    const { Name } = req.query;
    Product.find()
        .populate("AlbumId")
        .populate({
            path: "TypeId",
            match: {
                Name: Name
            }
        })
        .then(products => {
            return products.filter((product) => product.TypeId.length > 0)
        })
        .then(products => res.status(200).json(products))
        .catch(err => res.status(500).json(err))
}

module.exports.getRandomProductInType = (req, res, next) => {
    const { Name } = req.query;
    let tagId = "";
    Type.find({ Name })
        .then(type => {
            return type[0]["_id"]
        })
        .then(TypeId => {
            Product.find({ TypeId })
                .populate("TypeId")
                .populate("AlbumId")
                .then(products => {
                    let ar = shuffle(products);
                    return ar.slice(0, 4)
                })
                .then(products => res.status(200).json((products)))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
}

module.exports.getRandomProductInAlbum = (req, res, next) => {
    const { Name } = req.query;
    let AlbumId = "";
    Album.find({ Name })
        .then(album => {
            return album[0]["_id"]
        })
        .then(AlbumId => {
            Product.find({ AlbumId })
                .populate("AlbumId")
                .populate("TagId")
                .then(products => {
                    let ar = shuffle(products);
                    return ar.slice(0, 4)
                })
                .then(products => res.status(200).json((products)))
                .catch(err => res.status(500).json(err))
        })
        .catch(err => res.status(500).json(err))
}