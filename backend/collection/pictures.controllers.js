const Model_Pictures = require("./pictures.model");

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
      return res.status(404).json({ message: "NON TROUVE" }, error);
    }
  })();
};

exports.updatePicture = (req, res) => {};
exports.deletePicture = (req, res) => {};
