const express = require("express");
const productController = require("./controller");
const router = express.Router();

router.get("/", productController.getProducts)
// router.get("/", productController.getProductById)
// router.get("/", productController.getProductByName)


router.post("/createProduct", productController.createProduct);
router.put("/setProductAlbumById", productController.setProductAlbumById);
router.put("/setProductTypeById", productController.setProductTypeById);
router.get("/getRandomProductInAlbum", productController.getRandomProductInAlbum)
router.get("/getRandomProductInType", productController.getRandomProductInType)

router.get("/getProductsByAlbum", productController.getProductsByAlbum)
router.get("/getProductsByType", productController.getProductsByType)

router.get("/searchProduct", productController.searchProduct)
router.delete("/deleteProductById", productController.deleteProductById);

router.put("/updateProductById", productController.editProductDetailsById);
module.exports = router;