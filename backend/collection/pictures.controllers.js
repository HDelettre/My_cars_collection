const Model_Pictures = require("./pictures.model");

const fs = require("fs");

//
// PICTURE SAVE
//
exports.savePicture = (req, res) => {
  const newPicture = Model_Pictures.build(req.body);
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
exports.updatePicture = (req, res) => {
  (async () => {
    //1- La nouvelle image a été sauvegardée par Multer
    //2- je récupère le nom du nouveau fichier
    const pictureFile = JSON.parse(JSON.stringify(req.files.model_picture))[0];
    console.log("PICTURE FILE: ", pictureFile);
    //3- je récupére le nom de l'ancienne photo
    try {
      const reponse = await Model_Pictures.findOne({
        where: { id: req.params.id },
      });

      const fileToBeDeleted = reponse.pictureName;
      console.log("FILE TO BE DELETED: ", fileToBeDeleted);

      //4- je supprime l'ancienne photo du dossier

      fs.unlink(`pictures/modelCars/${fileToBeDeleted}`, (err) => {
        if (err) {
          throw err;
        }
        console.log("DELETE FILE SUCCESSFULLY");
      });

      //5- je mets à jour la BDD
      try {
        await Model_Pictures.update(
          {
            pictureName: pictureFile.filename,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        );
      } catch (error) {
        return res.status(404).send("OLD PICTURE NOT FOUND IN BDD");
      }
      await reponse.save();

      return res.status(200).send("LA PHOTO A ETE CHANGEE");
    } catch (error) {
      return res.status(404).send("ERROR UPDATE PICTURE");
    }
  })();
};

//
exports.deletePicture = (req, res) => {
  (async () => {
    try {
      const reponse = await Model_Pictures.findOne({
        where: { id: req.params.id },
      });
      // const reponseJSON = await reponse.json();
      const fileToBeDeleted = reponse.pictureName;
      console.log("FILE TO BE DELETED: ", fileToBeDeleted);

      await reponse.destroy();

      fs.unlink(`pictures/modelCars/${fileToBeDeleted}`, (err) => {
        if (err) {
          throw err;
        }
        console.log("DELETE FILE SUCCESSFULLY");
      });

      return res.status(200).json({ message: "Fichier supprimé" });
    } catch (error) {
      return res.status(404).send("NOT FOUND");
    }
  })();
};
