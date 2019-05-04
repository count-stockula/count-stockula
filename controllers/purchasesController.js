const db = require("../models");

module.exports = {
  create: function(req, res){
    db.Purchase
    .create(req.body)
    .then(newRecord => res.json(newRecord))
    .catch(err => res.status(400).json("Items not written to the db" + err))
  }
};