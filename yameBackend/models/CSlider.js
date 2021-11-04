const mongoose = require("mongoose");

const CSliderSchema = new mongoose.Schema({
    Image: { type: String, required: true },
})

const CSlider = mongoose.model("CSlider", CSliderSchema, "CSlider");

module.exports = {
    CSliderSchema, CSlider
}