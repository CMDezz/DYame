const mongoose = require("mongoose");

const CDiscountSchema = new mongoose.Schema({
    Image: { type: String, required: true },
})

const CDiscount = mongoose.model("CDiscount", CDiscountSchema, "CDiscount");

module.exports = {
    CDiscountSchema, CSlider
}