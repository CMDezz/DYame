const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Image: [{ type: String }]
})

const Album = mongoose.model("Album", AlbumSchema, "Album");
module.exports = {
    Album, AlbumSchema
}