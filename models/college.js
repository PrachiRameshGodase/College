const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const college = sequelize.define("college", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  courses_offered: {
    type: Sequelize.STRING, 
    allowNull: false,
  },
  fees: {
    type: Sequelize.DECIMAL(10, 2), 
    allowNull: false,
  },
});

module.exports = college;
