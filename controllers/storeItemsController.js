const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.StoreItem
      .find({ storeId: req.params.id })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.StoreItem
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.StoreItem
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.StoreItem
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.StoreItem
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  reduceByOne: function(req,res) {
    db.StoreItem
      .findById(req.params.id)
      .then(dbModel => {
        dbModel.currentQty = (dbModel.currentQty - 1);
        db.StoreItem
          .findOneAndUpdate({ _id: req.params.id }, dbModel)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      });
  }
};
