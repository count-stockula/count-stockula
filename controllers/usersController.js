const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    if (req.body.storeId) {
      db.User
        .find({ storeId: req.body.storeId })
        .then(foundArray => res.json(foundArray))
        .catch(err => res.status(422).json(err));
    } else {
      db.User
        .find({})
        .then(foundArray => res.json(foundArray))
        .catch(err => res.status(422).json(err));
    }
  },
  findById: function (req, res) {
    db.User
      .findById(req.params.id)
      .populate("storeId")
      .then(foundObj => res.json(foundObj))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    if (req.body.storeId) {
      db.User
        .create(req.body)
        .then(madeObj => {
          db.Store
            .findOne({ _id: req.body.storeId })
            .then(foundObj => {
              let userArray = foundObj.userId;
              userArray.push(madeObj._id);
              db.Store
                .findOneAndUpdate({ _id: req.body.storeId }, { userId: userArray })
                .then(() => res.json(madeObj))
                .catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).json(err));
        })
        .catch(err => res.status(422).json(err));
    } else {
      res.status(400).json("bad request");
    }
  },
  update: function (req, res) {
    db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => {
        db.User
          .findOne({ _id: req.params.id })
          .then(foundObj => res.json(foundObj))
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
