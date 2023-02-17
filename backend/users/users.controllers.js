const UserModel = require("./users.models");

exports.createUser = (req,res) => {
  const newUser = UserModel.build(req.body);
  //
  // email valide et unique
  // password valide
  // cryptage password
  //
  ( async () => {
    try {
      await newUser.save();
      return res.status(200).send(newUser);
    } catch (error) {
      return res.status(500).send("ERROR DURING CREATE USER !")
    }
  })();
};

//
exports.loginUser = (req,res) => {
  ( async () => {})();
};

//
exports.logoutUser = (req,res) => {
  ( async () => {})();
};

//
exports.getAllUsers = (req,res) => {
  ( async () => {})();
};

//
exports.getOneUser = (req,res) => {
  ( async () => {})();
};

//
exports.updateUser = (req,res) => {
  ( async () => {})();
};

//
exports.deleteUser = (req,res) => {
  ( async () => {})();
};