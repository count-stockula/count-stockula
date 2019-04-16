const db = require("../models");
// const importName = require();

module.exports = {
  findAll: function (req, res) {
    if (req.body.storeId) {
      db.StoreItem
        .find({ storeId: req.body.storeId })
        .then(foundArray => res.json(foundArray))
        .catch(err => res.status(422).json(err));
    } else {
      db.StoreItem
        .find({})
        .then(foundArray => res.json(foundArray))
        .catch(err => res.status(422).json(err));
    }
  },
  findById: function (req, res) {
    db.StoreItem
      .findById(req.params.id)
      .then(foundObj => res.json(foundObj))
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
    if (req.body.storeId && req.body.upc) {
      db.StoreItem
        .findOne(req.body)
        .then(foundObj => res.json(foundObj))
        .catch(err => res.status(422).json(err));
    } else {
      res.status(400).json("bad request");
    }
  },
  reduceStock: function (req, res) {
    if (req.body.storeId && req.body.upc) {
      db.StoreItem
        .findOne({ storeId: req.body.storeId, upc: req.body.upc })
        .then(foundObj => {
          let updatedQty = (foundObj.currentQty - req.body.reduceQty);
          if ((updatedQty < foundObj.criticalQty) && (foundObj.alertStatus === false)) {
            //importname.functionname(foundObj, updatedQty);
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
    db.StoreItem
      .find(req.body)
      .then(foundArray => {
        let lowStockArray = foundArray.filter(function (item) {
          return (item.currentQty < item.criticalQty);
        });
        res.json(lowStockArray);
      })
      .catch(err => res.status(422).json(err));
  }
};
