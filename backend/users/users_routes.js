const express = require("express");

const multer = require("../config/multer");

const router = express.Router();

const usersCtrl = require("./users.controllers");

//
// ROUTES
//
router.post("/", usersCtrl.createUser);
router.post("/login", usersCtrl.loginUser);
router.get("/logout", usersCtrl.logoutUser);
router.get("/", usersCtrl.getAllUsers);
router.get("/:id", usersCtrl.getOneUser);
router.patch("/:id", usersCtrl.updateUser);
router.delete("/:id", usersCtrl.deleteUser);

//
// EXPORTS
//
module.exports = router;