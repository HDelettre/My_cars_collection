const multer = require('multer');

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png"
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    console.log('MULTER: ', file.fieldname);
    if (file.fieldname === 'model_picture') {
      callback(null, "pictures/modelCars");
    } else {
      callback(null, "pictures/profile");
    }
  },

  filename: (req, file, callback) => {
    const fileExtension = MIME_TYPES[file.mimetype];
    console.log('req.body: ', req.body.model_id);
    let fileName = "";
    if (file.fieldname === 'model_picture') {
      fileName = req.body.model_id + '_' + Date.now() + '.' + fileExtension;
    } else {
      fileName = req.params.id + '.' + fileExtension;
    }
    callback(null, fileName);
  }
})

module.exports = multer({ storage : storage }).fields([
  {name:'model_picture', maxCount: 1},
  {name: 'profile', maxCount: 1}
]);