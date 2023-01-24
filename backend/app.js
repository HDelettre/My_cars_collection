// EXPRESS
const express = require("express");

// LOADING ENVIRONMENT VARIABLES - PORT_USED
require("dotenv").config({
  path: "./config/.env",
});

const multer = require("./config/multer");

// PATH TO ROUTES
const carsRoutes = require("./collection/collection.routes");
const picturesRoutes = require ("./collection/pictures.routes");

// MYSQL / SEQUELIZE
const sequelize = require("./config/databaseAccess");
// Synchronization of models
// const carsModel = require("./collection/collection.models");
// carsModel.sync({alter: true});
require("./collection/collection.models");
require("./collection/pictures.model");
sequelize.sync({ alter: true });

// HELMET
const helmet = require("helmet");

const app = express();

const cors = require("cors");
app.use(cors());

app.use("/pictures", express.static(__dirname + "/pictures"));

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
      );
      next();
    });
    
    app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(express.json());

// ROUTES CALLING
app.use("/api/cars", carsRoutes);
app.use("/api/cars", picturesRoutes);

// EXPORTS
module.exports = app;
