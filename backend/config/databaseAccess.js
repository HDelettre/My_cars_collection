// LOADING ENVIRONMENT VARIABLES
require("dotenv").config({
  path: "./config/.env",
});

const { Sequelize } = require("sequelize");
const carsModel = require ("../collection/collection.models");

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connexion à MySQL réussie !");
    //await carsModel.sync({alter: true})
  } catch (error) {
    console.log("Echec de connexion ! ", error);
  }
})();

module.exports = sequelize;