const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const user = sequelize.define("user", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  UserName: {
    type: Sequelize.STRING,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = user;
