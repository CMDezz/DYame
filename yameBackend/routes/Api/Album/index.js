const express = require("express");
const AlbumController = require("./controller");
const router = express.Router();

router.get("/", AlbumController.getAlbum)
// router.get("/", cAdsController.getcAdsById)
// router.get("/", cAdsController.getcAdsByName)


router.post("/createAlbum", AlbumController.createAlbum);

router.delete("/deleteAlbum", AlbumController.deleteAlbumByName);

module.exports = router;