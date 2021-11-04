const express = require("express");
const router = express.Router();


router.use("/product", require('./Product'));
router.use("/album", require('./Album'));
router.use("/type", require('./Type'));

// router.use("/CSlider", require('./CSlider'));
// router.use("/CAds", require('./CAds'));
// router.use("/CDiscount", require('./CDiscount'));

module.exports = router;

