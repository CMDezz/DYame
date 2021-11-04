const express = require("express");
const cDiscountController = require("./controller");
const router = express.Router();

router.get("/", cDiscountController.getCDiscounts)
// router.get("/", cAdsController.getcAdsById)
// router.get("/", cAdsController.getcAdsByName)


router.post("/createCDiscount", cDiscountController.createCDiscount);

router.delete("/deleteCDiscountById", cDiscountController.deleteCDiscountById);

module.exports = router;