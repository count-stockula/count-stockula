const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/count-stockula");

const storeItemSeed = [
  {
    name: "coke zero vanilla 12oz can",
    description: "coke zero vanilla 12oz",
    upc: "049000048247",
    currentQty: 30,
    criticalQty: 10
  },
  {
    name: "heineken 12oz can",
    description: "heineken 12oz can",
    upc: "07289042",
    currentQty: 20,
    criticalQty: 8
  }
];

const storeSeed = [
  {
    name: "Johnsonville Chevron",
    street: "1234 john hwy",
    city: "Canton",
    state: "GA",
    phoneNumber: "6786666666"
  }
];

db.Store.remove({}).then(() => db.Store.collection.insertMany(storeSeed))
  .then(data => {
  console.log("store records inserted!");
}).catch(err => {
  console.error(err);
  process.exit(1);
}).then(() => db.StoreItem.remove({}))
  .then(() => {
  db.Store.findOne({}).then(foundObj => {
    storeItemSeed[0].storeId = foundObj._id;
    storeItemSeed[1].storeId = foundObj._id;
    db.StoreItem.collection.insertMany(storeItemSeed)
  }).then(data => {
    console.log("store item records inserted!");
    process.exit(0);
  }).catch(err => {
    console.error(err);
    process.exit(1);
  })
})