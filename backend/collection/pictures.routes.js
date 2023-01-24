const express = require("express");

const multer = require("../config/multer");

const router = express.Router();

const picturesCtrl = require("./pictures.controllers");

//
// ROUTES
//
router.post('/pict', multer, picturesCtrl.savePicture);
router.get('/pict', picturesCtrl.getAllPictures);
router.get('/pict/:id', picturesCtrl.getOnePicture);
router.patch("/pict/:id", picturesCtrl.updatePicture);
router.delete("/pict/:id", picturesCtrl.deletePicture);

//
// EXPORTS
//
module.exports = router;