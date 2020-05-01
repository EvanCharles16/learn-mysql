'use strict';
module.exports = (sequelize, DataTypes) => {
  const coffee = sequelize.define('coffee', {
    name: DataTypes.STRING,
    bean: DataTypes.STRING,
    method: DataTypes.STRING,
    price: DataTypes.STRING
  }, {});
  coffee.associate = function(models) {
    // associations can be defined here
  };
  return coffee;
};