const { Sequelize, DataTypes, INTEGER } = require("sequelize");

const sequelize = require("../config/databaseAccess");

const carsModel = sequelize.define("carsModel", {
  model_id: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  team: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  year: {
    type: INTEGER(4),
    allowNull: false,
  },
  driver: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  race: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  reference: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  qualificationPosition: {
    type: DataTypes.STRING,
  },
  qualificationTime: {
    type: DataTypes.STRING,
  },
  racePosition: {
    type: DataTypes.STRING,
  },
  raceTime: {
    type: DataTypes.STRING,
  },
  bestLapPosition: {
    type: DataTypes.STRING,
  },
  bestLapTime: {
    type: DataTypes.STRING,
  },
});

module.exports = carsModel;
