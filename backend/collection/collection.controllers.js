const carsModel = require("./collection.models");

//
// GET ALL CARS
//
exports.getAllCars = (req, res) => {
  (async () => {
    try {
      const reponse = await carsModel.findAll();
      return res.status(200).send(reponse);
    } catch (error) {
      return res.status(500).json({ message: "NON TROUVE ", error });
    }
  })();
};

//
// GET ONE CARS
//
exports.getOneCar = (req, res) => {}

//
// CREATE CAR
//
exports.createCar = (req, res) => {
  const newCars = carsModel.build(req.body);
  ( async () => {
    try {
      await newCars.save();
      return res.status(200).json({ newCars });
    } catch (error) {
      return res.status(500).json({message: "ERROR SERVER: ", error});
    }
  })();
}

//
// GET BY SEASONS
//
exports.getBySeason = (req,res) => {
  (async () => {
    try {
      const reponse = await carsModel.findAll({
        where: {year: req.params.id}
      });
      return res.status(200).send({reponse});
    } catch (error) {
      return res.status(404).json({message: "NON TROUVE"}, error)
    }
  })();
};

//
exports.getByTeam = (req,res) => {};
exports.getBydriver = (req,res) => {};
exports.updateCar = (req,res) => {};
exports.deleteCar = (req,res) => {};