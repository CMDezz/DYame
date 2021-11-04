const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    AlbumId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Album' }],
    TypeId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Type' }],
    Price: { type: Number, required: true },
    Detail: mongoose.Schema.Types.Mixed,
    Size: mongoose.Schema.Types.Mixed,
    Image: [{ type: String, required: true }],
    SubImage: [{ type: String, required: true }],
})

const Product = mongoose.model("Product", ProductSchema, "Product");

module.exports = {
    ProductSchema, Product
}