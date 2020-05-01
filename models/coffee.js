// "use strict";
// module.exports = (sequelize, DataTypes) => {
//   const coffee = sequelize.define("coffee", {
//     name: DataTypes.STRING,
//     bean: DataTypes.STRING,
//     method: DataTypes.STRING,
//     price: DataTypes.STRING,
//   });
//   return coffee;
// };

const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

const Coffee = sequelize.define("coffee", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bean: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  method: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Coffee;
