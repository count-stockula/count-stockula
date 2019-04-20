const db = require("../models");
//const textApiCall = require("./textApiCall");

module.exports = {
  findAll: function (req, res) {
    if (req.query.storeId) {
      db.StoreItem
        .find({ storeId: req.query.storeId })
        .sort({ name: 1 })
        .then(foundArray => {
          if (foundArray) {
            res.json(foundArray);
          } else {
            res.status(400).json("no items found");
          };
        })
        .catch(err => res.status(422).json(err));
    } else {
      db.StoreItem
        .find({})
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
      db.StoreItem
        .findOne(req.query)
        .then(foundObj => {
          if (foundObj) {
            res.json(foundObj);
          } else {
            res.status(400).json("no items found");
          };
        })
        .catch(err => res.status(422).json(err));
    } else {
      res.status(400).json("bad request");
    }
  },
  reduceStock: function (req, res) {
    if (req.body.storeId && req.body.upc) {
      db.StoreItem
        .findOne({ storeId: req.body.storeId, upc: req.body.upc })
        .populate("storeId")
        .then(foundObj => {
          let updatedQty = (foundObj.currentQty - req.body.reduceQty);
          if ((updatedQty < foundObj.criticalQty) && (foundObj.alertStatus === false)) {
            //textApiCall.sendTxt(foundObj, updatedQty);
            foundObj.alertStatus = true;
          }
          db.StoreItem
            .findOneAndUpdate({ storeId: req.body.storeId, upc: req.body.upc }, { currentQty: updatedQty, alertStatus: foundObj.alertStatus })
            .then(() => {
              db.StoreItem
                .findOne({ storeId: req.body.storeId, upc: req.body.upc })
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
  addStock: function (req, res) {
    if (req.body.storeId && req.body.upc) {
      db.StoreItem
        .findOne({ storeId: req.body.storeId, upc: req.body.upc })
        .then(foundObj => {
          let updatedQty = (foundObj.currentQty + req.body.addQty);
          if (updatedQty >= foundObj.criticalQty) {
            foundObj.alertStatus = false;
          }
          db.StoreItem
            .findOneAndUpdate({ storeId: req.body.storeId, upc: req.body.upc }, { currentQty: updatedQty, alertStatus: foundObj.alertStatus })
            .then(() => {
              db.StoreItem
                .findOne({ storeId: req.body.storeId, upc: req.body.upc })
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
            return (item.currentQty < item.criticalQty);
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
            return (item.currentQty < item.criticalQty);
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
  }
};
