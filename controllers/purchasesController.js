const db = require("../models");

module.exports = {
  create: function(req, res){
    db.Purchase
    .create(req.body)
    .then(newRecord => res.json(newRecord))
    .catch(err => res.status(400).json("Items not written to the db" + err))
  },
  getStoreSales: function(req, res){
    if (req.query.storeId) {
      db.Purchase
      .find({storeId: req.query.storeId })
      .where("items").ne([])
      .populate("storeId")
        .populate("items")
        .sort({storeId:1, purchaseDate:1})
      .then(foundArray => {
        res.json(foundArray);
      })
      .catch(err => res.status(422).json(err));
    }else{
      db.Purchase
        .find({})       
        .populate("storeId")
        .where("items").ne([])
        .populate("items")
        .sort({storeId:1, purchaseDate:1})
        .then(foundArray => {
          res.json(foundArray);
        })
        .catch(err => res.status(422).json(err));
    }
  }
 

};