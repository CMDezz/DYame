const express = require("express");
const typeController = require("./controller");
const router = express.Router();

router.get("/", typeController.getTypes)
// router.get("/", productController.getProductById)
// router.get("/", productController.getProductByName)


router.post("/createType", typeController.createType);

router.delete("/deleteTypeById", typeController.deleteTypeById);
router.delete("/deleteAll", typeController.deleteAll);

module.exports = router;