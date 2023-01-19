const express = require("express");

const router = express.Router();

const carsCtrl = require("./collection.controllers");

//
// ROUTES
//
router.get('/', carsCtrl.getAllCars);
router.get('/:id', carsCtrl.getOneCar);
router.post('/', carsCtrl.createCar);

//
// EXPORTS
//
module.exports = router;