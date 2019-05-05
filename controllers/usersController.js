const db = require("../models");
//const passport = require("../passport");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const saltRounds = 10;
const secret = process.env.JWT_SECRET;

module.exports = {
  findAll: function (req, res) {
    if (req.query.storeId) {
      db.User.find({ storeId: req.query.storeId })
        .sort({ name: 1 })
        .then(foundArray => {
          if (foundArray) {
            res.json(foundArray);
          } else {
            res.status(500).json("no users found");
          }
        })
        .catch(err => res.status(500).json(err));
    } else {
      db.User.find({})
        .sort({ name: 1 })
        .then(foundArray => {
          if (foundArray) {
            res.json(foundArray);
          } else {
            res.status(500).json("no users found");
          }
        })
        .catch(err => res.status(500).json(err));
    }
  },
  findById: function (req, res) {
    db.User.findById(req.params.id)
      .populate("storeId")
      .then(foundUser => {
        if (foundUser) {
          res.json(foundUser);
        } else {
          res.status(500).json("no users found");
        }
      })
      .catch(err => res.status(500).json(err));
  },
  currentUser: function (req, res) {
    const { email, storeId } = jwt.verify(req.cookies.token, secret);
    db.User.findOne({ email: email })
      .populate("storeId")
      .then(foundUser => {
        if (foundUser) {
          res.json(foundUser);
        } else {
          res.status(500).json("no users found");
        }
      })
      .catch(err => res.status(500).json(err));
  },
  create: function (req, res) {
    if (req.body.storeId) {
      //check for existing user
      db.User.findOne({ email: req.body.email }).then(foundUser => {
        if (foundUser) {
          res.status(200).json("user already exists");
        } else {
          db.User.create(req.body)
            .then(newUser => {
              db.Store.findOneAndUpdate(
                {
                  _id: newUser.storeId
                },
                {
                  $push: {
                    userId: newUser._id
                  }
                }
              )
                .then(() => res.status(200).json(newUser.email))
                .catch(err =>
                  res.status(500).json({ error: "db.Store.findOneAndUpdate error" })
                );
            })
            .catch(err =>
              res.status(500).json({ error: "db.User.create error" })
            );
        }
      });
    } else {
      res.status(500).json({ error: "storeId is required" });
    }
  },
  signup: function(req, res) {
    if (req.body.storeId) {
      //check for existing user
      db.User.findOne({ email: req.body.email }).then(foundUser => {
        if (foundUser) {
          res.status(200).json("user already exists");
        } else {
          db.User.create(req.body)
            .then(newUser => {
              db.Store.findOneAndUpdate(
                {
                  _id: newUser.storeId
                },
                {
                  $push: {
                    userId: newUser._id
                  }
                }
              )
                .then(() => res.status(200).json(newUser.email))
                .catch(err =>
                  res.status(500).json({
                    error: "db.Store.findOneAndUpdate error"
                  })
                );
            })
            .catch(err =>
              res.status(500).json({ error: "db.User.create error" })
            );
        }
      });
    } else {
      res.status(500).json({ error: "storeId is required" });
    }
  },
  // update: function(req, res) {
  //   if (req.body.password) {
  //     // bcrypt.hash(req.body.password, saltRounds).then(hash => {
  //     //   req.body.password = hash;
  //     db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
  //       .then(() => {
  //         db.User.findOne({ _id: req.params.id })
  //           .then(foundUser => res.json(foundUser.email))
  //           .catch(err =>
  //             res.status(500).json({ error: "error on db.User.findOne" })
  //           );
  //       })
  //       .catch(err =>
  //         res.status(500).json({ error: "error on db.User.findOneAndUpdate" })
  //       );
  //     // });
  //   } else {
  //     // why do we do the same thing on else ???
  //     db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
  //       .then(() => {
  //         db.User.findOne({ _id: req.params.id })
  //           .then(foundUser => res.json(foundUser.email))
  //           .catch(err =>
  //             res.status(500).json({ error: "error on db.User.findOne" })
  //           );
  //       })
  //       .catch(err =>
  //         res.status(500).json({ error: "error on db.User.findOneAndUpdate" })
  //       );
  //   }
  //   }
  // },
  update: function (req, res) {
    db.User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => {
        db.User.findOne({ _id: req.params.id })
          .then(foundUser => res.json(foundUser.email))
          .catch(err => res.status(500).json(err));
      })
      .catch(err => res.status(500).json(err));
  },
  remove: function (req, res) {
    db.User.findById({ _id: req.params.id })
      .then(foundUser => foundUser.remove())
      .then(removedUser => res.json(removedUser.email))
      .catch(err => res.status(500).json(err));
  },
  login: function (req, res) {
    const { email, password } = req.body;
    db.User.findOne({ email: email })
      .then(foundUser => {
        if (!foundUser) {
          res.status(401).json({
            error: "email username not found"
          });
        } else {
          bcrypt.compare(password, foundUser.password, function (err, match) {
            if (err) {
              res.status(500).json({
                error: "bcrypt.compare error"
              });
            } else if (!match) {
              res.status(401).json({
                error: "incorrect password"
              });
            } else {
              // Issue token
              const payload = {
                email: foundUser.email,
                storeId: foundUser.storeId
              };
              const token = jwt.sign(payload, secret, {
                expiresIn: "6h"
              });
              res.cookie("token", token, {
                httpOnly: true
              })
              .sendStatus(200);
            }
          });
        }
      })
      .catch(err => res.status(500).json({ error: "db.User.findOne error" }));
  },
  authenticate: function(req, res) {
    res.status(200).json(true);
    //res.status(200).send(true);
  },
  signout: function (req, res) {
    res.send("successful test signout");
  }
};
