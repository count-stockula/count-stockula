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
    console.log("req.body:\n", req.body);
    if (req.body.storeId) {
      /*
      bcrypt
        .hash(req.body.password, saltRounds)
        .then(hash => {
          req.body.password = hash;
          //console.log("req.body\n:", req.body);
          return req;
        })
        .then(req => {
          console.log("req.body:\n", req.body);
      */
      db.User.create(req.body)
        .then(madeObj => {
          console.log("madeObj:\n", madeObj);
          db.Store.findOne({
            _id: req.body.storeId
          })
            //.findOne({ name: req.body.storeId })
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
      /*
        });
        */
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
  checkPass: function(req, res) {
    //console.log("req.query:\n", req.query);
    //console.log("req.body:\n", req.body);
    //console.log("req:\n", req);
    db.User.findOne({ email: req.body.email })
      .then(foundObj => {
        console.log("foundObj:\n", foundObj);
        console.log("req.body:\n", req.body);
        if (foundObj) {
          console.log("found it");
          bcrypt
            .compare(req.body.password, foundObj.password)
            .then(compareResult => {
              if (compareResult) {
                res.json(foundObj);
              } else {
                res.json("bad password");
              }
            });
        } else {
          res.json("bad email");
        }
      })
      .catch(err => res.status(422).json(err));
  }
};
