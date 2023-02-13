const express = require("express");

const multer = require("../config/multer");

const router = express.Router();

const picturesCtrl = require("./pictures.controllers");

//
// ROUTES
//
router.post('/', multer, picturesCtrl.savePicture);
router.get("/", picturesCtrl.getAllPictures);
router.get('/:id', picturesCtrl.getOnePicture);
router.patch("/:id", picturesCtrl.updatePicture);
router.delete("/:id", picturesCtrl.deletePicture);

//
// EXPORTS
//
module.exports = router;