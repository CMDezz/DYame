const mongoose = require("mongoose");

const TypeSchema = new mongoose.Schema({
    Name: { type: String, required: true },
})

const Type = mongoose.model("Type", TypeSchema, "Type");

module.exports = {
    TypeSchema, Type
}