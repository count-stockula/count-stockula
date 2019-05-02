const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Store
      .find({})
      .sort({ name: 1 })
      .then(foundArray => {
        if (foundArray) {
          res.json(foundArray);
        } else {
          res.status(400).json("no stores found");
        };
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Store
      .findById(req.params.id)
      .populate("userId")
      .then(foundObj => {
        if (foundObj) {
          res.json(foundObj);
        } else {
          res.status(400).json("no items found");
        };
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Store
      .create(req.body)
      .then(madeObj => res.json(madeObj))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Store
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => {
        db.Store
          .findOne({ _id: req.params.id })
          .then(foundObj => res.json(foundObj))
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Store
      .findById({ _id: req.params.id })
      .then(foundObj => foundObj.remove())
      .then(removedObj => res.json(removedObj))
      .catch(err => res.status(422).json(err));
  }
};
