const express = require("express");
const cAdsController = require("./controller");
const router = express.Router();

router.get("/", cAdsController.getcAdss)
// router.get("/", cAdsController.getcAdsById)
// router.get("/", cAdsController.getcAdsByName)


router.post("/createCAds", cAdsController.createCAds);

router.delete("/deleteCAdsById", cAdsController.deleteCAdsById);

module.exports = router;