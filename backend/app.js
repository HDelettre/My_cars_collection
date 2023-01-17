// EXPRESS
const express = require("express");

// LOADING ENVIRONMENT VARIABLES - PORT_USED
require("dotenv").config({
  path: "./config/.env",
});

// PATH TO ROUTES
//const authRoutes = require("./Routes/users");

// MYSQL / SEQUELIZE
const sequelize = require("./Config/databaseAccess");
// Synchronization of models
//require("./Models/user.model");
sequelize.sync({ alter: true });

// HELMET
const helmet = require("helmet");

const app = express();
app.use(helmet);
app.use("/Pictures", express.static(__dirname + "/Pictures"));

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

app.use(express.json());

// ROUTES CALLING
//app.use("/api/auth", authRoutes);

// EXPORTS
module.exports = app;
