const db = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports = {
  findAll: function(req, res) {
    if (req.query.storeId) {
      db.User.find({ storeId: req.query.storeId })
        .sort({ name: 1 })
        .then(foundArray => {
          if (foundArray) {
            res.json(foundArray);
          } else {
            res.status(400).json("no users found");
          }
        })
        .catch(err => res.status(422).json(err));
    } else {
      db.User.find({})
        .sort({ name: 1 })
        .then(foundArray => {
          if (foundArray) {
            res.json(foundArray);
          } else {
            res.status(400).json("no users found");
          }
        })
        .catch(err => res.status(422).json(err));
    }
  },
  findById: function(req, res) {
    db.User.findById(req.params.id)
      .populate("storeId")
      .then(foundObj => {
        if (foundObj) {
          res.json(foundObj);
        } else {
          res.status(400).json("no users found");
        }
      })
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    if (req.body.storeId) {
      db.User.create(req.body)
        .then(madeObj => {
          db.Store.findOne({
            _id: req.body.storeId
          })
            .then(foundObj => {
              let userArray = foundObj.userId;
              userArray.push(madeObj._id);
              db.Store.findOneAndUpdate(
                {
                  _id: req.body.storeId
                },
                {
                  userId: userArray
                }
              )
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
  update: function(req, res) {
    if (req.body.password) {
      bcrypt.hash(req.body.password, saltRounds).then(hash => {
        req.body.password = hash;
        db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(() => {
            db.User.findOne({ _id: req.params.id })
              .then(foundObj => res.json(foundObj))
              .catch(err => res.status(422).json(err));
          })
          .catch(err => res.status(422).json(err));
      });
    } else {
      db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(() => {
          db.User.findOne({ _id: req.params.id })
            .then(foundObj => res.json(foundObj))
            .catch(err => res.status(422).json(err));
        })
        .catch(err => res.status(422).json(err));
    }
  },
  remove: function(req, res) {
    db.User.findById({ _id: req.params.id })
      .then(foundObj => foundObj.remove())
      .then(removedObj => res.json(removedObj))
      .catch(err => res.status(422).json(err));
  },
  login: function(req, res) {
    db.User.findOne({ email: req.body.email })
      .then(foundObj => {
        if (foundObj) {
          bcrypt
            .compare(req.body.password, foundObj.password)
            .then(compareResult => {
              if (compareResult) {
                res.json(foundObj);
              } else {
                res.json("incorrect password");
              }
            });
        } else {
          res.json("email username not found");
        }
      })
      .catch(err => res.status(422).json(err));
  }
};
