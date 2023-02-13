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

//
exports.getBydriver = (req,res) => {};

exports.updateCar = (req, res) => {
  (async () => {
    try {
      await carsModel.update(
        {
          manufacturer: req.body.manufacturer,
          reference: req.body.reference,
          status: req.body.status
        }, {
          where: {
            model_id: req.params.id
          }
        }
      )
    } catch (error) {
      return res.status(404).json({message: "NON TROUVE"}, error)
    }
  })();
};

//
exports.updateResultCar = (req,res) => {
  
  (async () => {
    try {
      await carsModel.update(
        {
          qualificationPosition: req.body.qualificationPosition,
          qualificationTime: req.body.qualificationTime,
          racePosition: req.body.racePosition,
          raceTime: req.body.raceTime,
          bestLapPosition: req.body.bestLapPosition,
          bestLapTime: req.body.bestLapTime
      }, {
        where: {
          model_id: req.params.id
        }
      }
      );
      return res.status(201).json({message: "BDD MISE A JOUR !"});
    }catch (error) {
      return res.status(404).json({message: "NON TROUVE"}, error)
    }
  })();
};

//
exports.deleteCar = (req,res) => {};