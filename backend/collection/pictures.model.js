const {Sequelize, DataTypes} = require('sequelize');

const sequelize = require('../config/databaseAccess');

const model_Pictures = sequelize.define('Model_Pictures', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement:true,
    primaryKey:true,
    unique:true,
    allowNull: false
  },
  pictureName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model_id: {
    type: DataTypes.INTEGER(4).ZEROFILL
  }
});

module.exports = model_Pictures;
