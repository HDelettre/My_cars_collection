const { Sequelize, DataTypes, INTEGER } = require("sequelize");

const sequelize = require("../config/databaseAccess");

const userModel = sequelize.define("UserModel", {
  userid: {
    type: DataTypes.INTEGER(4).ZEROFILL,
    autoIncrement: true,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "USER"
  },
  firstName: {
    type: DataTypes.STRING
  },
  lastName: {
    type: DataTypes.STRING
  },
  avatar: {
    type: DataTypes.STRING
  }
});

module.exports = userModel;