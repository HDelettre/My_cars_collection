const express = require("express");

const router = express.Router();

const carsCtrl = require("./collection.controllers");

//
// ROUTES
//
router.get('/', carsCtrl.getAllCars);
router.get('/:id', carsCtrl.getOneCar);
router.post('/', carsCtrl.createCar);
router.get('/season/:id', carsCtrl.getBySeason);
router.get('team/:id', carsCtrl.getByTeam);
router.get("/driver/:id", carsCtrl.getBydriver);
router.patch("/:id", carsCtrl.updateCar);
router.delete("/:id", carsCtrl.deleteCar);

//
// EXPORTS
//
module.exports = router;