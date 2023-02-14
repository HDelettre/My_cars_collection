const Model_Pictures = require("./pictures.model");

const fs = require('fs');

//
// PICTURE SAVE
//
exports.savePicture = (req, res) => {
  const newPicture = Model_Pictures.build(req.body);
  console.log("SAVE PICTURE: ", newPicture);
  const pictureFile = JSON.parse(JSON.stringify(req.files.model_picture))[0];
  newPicture["pictureName"] = pictureFile.filename;
  (async () => {
    try {
      await newPicture.save();
      return res
        .status(201)
        .json({ message: "Picture save with successfully !" });
    } catch (error) {
      return res.status(500).send(error);
    }
  })();
};

//
// GET ALL PICTURES
//
exports.getAllPictures = (req, res) => {
  (async () => {
    try {
      const reponse = await Model_Pictures.findAll();
      return res.status(200).send(reponse);
    } catch (error) {
      return res.status(404).json({ message: "NON TROUVE" }, error);
    }
  })();
};

//
// GET ONE PICTURES
//
exports.getOnePicture = (req, res) => {
  (async () => {
    try {
      const reponse = await Model_Pictures.findOne({
        where: { model_id: parseInt(req.params.id) },
      });
      return res.status(200).send({ reponse });
    } catch (error) {
      return res.status(404).send("ERROR", error);
    }
  })();
};

//
exports.updatePicture = (req, res) => {};

//
exports.deletePicture = (req, res) => {
  (async () => {
    try {
      const reponse = await Model_Pictures.findOne({
        where: { id: req.params.id}
      })
      // const reponseJSON = await reponse.json();
      const fileToBeDeleted = reponse.pictureName;
      console.log("FILE TO BE DELETED: ", fileToBeDeleted);

      await reponse.destroy();

      fs.unlink(`pictures/modelCars/${fileToBeDeleted}`, (err) => {
        if (err) { throw err;}
        console.log("DELETE FILE SUCCESSFULLY")
      })

      //fs.unlink(`C:/Users/rv/Documents/OPENCLASSROOM/PROJETS_WEB/MY_COLLECTION/backend/pictures/modelCars/${fileToBeDeleted}`);

      return res.status(200).json({ message: "Fichier supprimé"})

    } catch (error) {
      return res.status(404).send("NOT FOUND");
    }
  })();
};
