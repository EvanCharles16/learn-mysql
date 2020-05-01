const Coffee = require("../models/coffee");

module.exports = {
  create: (req, res) => {
    Coffee.create({
      name: req.body.name,
      bean: req.body.bean,
      method: req.body.method,
      price: req.body.price,
    })
      .then((response) => res.json(response))
      .catch((err) => {
        throw err;
      });
  },

  getData: (req, res) => {
    Coffee.findAll()
      .then((response) => res.json(response))
      .catch((err) => {
        throw err;
      });
  },

  getDataById: (req, res) => {
    Coffee.findOne({ where: { id: req.params.coffeeId } })
      .then((response) => res.json(response))
      .catch((err) => {
        throw err;
      });
  },

  deleteById: (req, res) => {
    Coffee.destroy({ where: { id: req.params.coffeeId } })
      .then((response) => res.json(response))
      .catch((err) => {
        throw err;
      });
  },

  updateById: (req, res) => {
    Coffee.update(
      {
        price: req.body.price,
      },
      { where: { id: req.params.coffeeId } }
    )
      .then((response) => res.json(response))
      .catch((err) => {
        throw err;
      });
  },
};
