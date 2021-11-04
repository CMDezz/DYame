const express = require("express");
const CSliderController = require("./controller");
const router = express.Router();

router.get("/", CSliderController.getCSliders)
// router.get("/", cAdsController.getcAdsById)
// router.get("/", cAdsController.getcAdsByName)


router.post("/createCSlider", CSliderController.createCSlider);

router.delete("/deleteCSliderById", CSliderController.deleteCSliderById);

module.exports = router;