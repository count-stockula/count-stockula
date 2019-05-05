const db = require("../models");
const textApiCall = require("./textApiCall");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET;

module.exports = {
  findAll: function (req, res) {
    db.StoreItem
      .find(req.query)
      .sort({ name: 1 })
      .then(foundArray => {
        if (foundArray) {
          res.json(foundArray);
        } else {
          res.status(400).json("no items found");
        };
      })
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.StoreItem
      .findById(req.params.id)
      .populate("storeId")
      .then(foundObj => {
        if (foundObj) {
          res.json(foundObj);
        } else {
          res.status(400).json("no items found");
        };
      })
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    const { email, storeId } = jwt.verify(req.cookies.token, secret);
    req.body.storeId = storeId;
    db.StoreItem
      .create(req.body)
      .then(madeObj => res.json(madeObj))
      .catch(err => res.status(422).json(err));
  },
  update: function (req, res) {
    db.StoreItem
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(() => {
        db.StoreItem
          .findOne({ _id: req.params.id })
          .then(foundObj => res.json(foundObj))
          .catch(err => res.status(422).json(err));
      })
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.StoreItem
      .findById({ _id: req.params.id })
      .then(foundObj => foundObj.remove())
      .then(removedObj => res.json(removedObj))
      .catch(err => res.status(422).json(err));
  },
  findByUpc: function (req, res) {
    if (req.query.storeId && req.query.upc) {
      const { email, storeId } = jwt.verify(req.cookies.token, secret);
      db.StoreItem
        .findOne({ storeId: storeId, upc: req.query.upc })
        .then(foundObj => {
          if (foundObj) {
            res.json(foundObj);
          } else {
            return res.status(404).json({ message: "no items found" });
          };
        })
        .catch(err => res.status(422).json({ message: err }));
    } else {
      return res.status(400).json("bad request");
    }
  },
  reduceStock: function (req, res) {
    if (req.body.storeId && req.body.upc) {
      const { email, storeId } = jwt.verify(req.cookies.token, secret);
      db.StoreItem
        .findOne({ storeId: storeId, upc: req.body.upc })
        .populate("storeId")
        .then(foundObj => {
          let updatedQty = (foundObj.currentQty - req.body.reduceQty);
          if ((updatedQty < foundObj.criticalQty) && (foundObj.alertStatus === false)) {
            textApiCall.sendTxt(foundObj, updatedQty);
            foundObj.alertStatus = true;
          }
          db.StoreItem
            .findOneAndUpdate({ storeId: storeId, upc: req.body.upc }, { currentQty: updatedQty, alertStatus: foundObj.alertStatus })
            .then(() => {
              db.StoreItem
                .findOne({ storeId: storeId, upc: req.body.upc })
                .then(updatedObj => res.json(updatedObj))
                .catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).json(err));
        })
        .catch(err => res.status(422).json(err));
    } else {
      res.status(400).json("bad request");
    }
  },
  addStock: function (req, res) {
    if (req.body.storeId && req.body.upc.trim()) {
      const { email, storeId } = jwt.verify(req.cookies.token, secret);
      db.StoreItem
        .findOne({ storeId: storeId, upc: req.body.upc.trim() })
        .then(foundObj => {
          let updatedQty = (foundObj.currentQty + parseInt(req.body.addQty));
          if (updatedQty >= foundObj.criticalQty) {
            foundObj.alertStatus = false;
          }
          db.StoreItem
            .findOneAndUpdate({ storeId: storeId, upc: req.body.upc.trim() }, { currentQty: updatedQty, alertStatus: foundObj.alertStatus })
            .then(() => {
              db.StoreItem
                .findOne({ storeId: storeId, upc: req.body.upc.trim() })
                .then(foundObj => res.json(foundObj))
                .catch(err => res.status(422).json(err));
            })
            .catch(err => res.status(422).json(err));
        })
        .catch(err => res.status(422).json(err));
    } else {
      res.status(400).json("bad request");
    }
  },
  lowStock: function (req, res) {
    if (req.query.storeId) {
      db.StoreItem
        .find({ storeId: req.query.storeId })
        .sort({ name: 1 })
        .then(foundArray => {
          let lowStockArray = foundArray.filter(function (item) {
            return (item.currentQty < item.criticalQty || item.currentQty <= 0);
          });
          res.json(lowStockArray);
        })
        .catch(err => res.status(422).json(err));
    } else {
      db.StoreItem
        .find({})
        .sort({ name: 1 })
        .then(foundArray => {
          let lowStockArray = foundArray.filter(function (item) {
            return (item.currentQty < item.criticalQty || item.currentQty <= 0);
          });
          res.json(lowStockArray);
        })
        .catch(err => res.status(422).json(err));
    }
  },
  zeroStock: function (req, res) {
    if (req.query.storeId) {
      db.StoreItem
        .find({ storeId: req.query.storeId })
        .sort({ name: 1 })
        .then(foundArray => {
          let zeroStockArray = foundArray.filter(function (item) {
            return (item.currentQty <= 0);
          });
          res.json(zeroStockArray);
        })
        .catch(err => res.status(422).json(err));
    } else {
      db.StoreItem
        .find({})
        .sort({ name: 1 })
        .then(foundArray => {
          let zeroStockArray = foundArray.filter(function (item) {
            return (item.currentQty <= 0);
          });
          res.json(zeroStockArray);
        })
        .catch(err => res.status(422).json(err));
    }
  },
  noScan: function (req, res) {
    const { email, storeId } = jwt.verify(req.cookies.token, secret);
    db.StoreItem
      .find({ storeId: storeId, noScan: true })
      .sort({ name: 1 })
      .then(foundArray => {
        if (foundArray) {
          res.json(foundArray);
        } else {
          res.status(400).json("no items found");
        };
      })
      .catch(err => res.status(422).json(err));
  }
};
