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
    phone: "6786666666",
    userId: []
  }
];

const userSeed = {
  email: "abcd1234@abc.com",
  password: "abcd1234",
  name: "Jack Doe",
  phone: "4445556666",
  management: true
};

db.Store.remove({})
  .then(() => db.Store.collection.insertMany(storeSeed))
  .then(() => {
    console.log("store records inserted!");
  }).catch(err => {
    console.error(err);
    process.exit(1);
  }).then(() => db.StoreItem.remove({}))
  .then(() => db.User.remove({}))
  .then(() => {
    db.Store.findOne({ name: "Johnsonville Chevron" }).then(foundObj => {
      storeItemSeed[0].storeId = foundObj._id;
      storeItemSeed[1].storeId = foundObj._id;
      //userSeed.storeId = foundObj._id;
    }).then(() => {
      db.StoreItem.collection.insertMany(storeItemSeed)
        .then(() => {
          console.log("store item records inserted!");
          process.exit(0);
        }).catch(err => {
          console.error(err);
          process.exit(1);
        })
        // .then(() => {
        //   db.User.create(userSeed)
        //     .then(newUser => {
        //       db.Store.findOneAndUpdate(
        //         {
        //           _id: newUser.storeId
        //         },
        //         {
        //           $push: {
        //             userId: newUser._id
        //           }
        //         }
        //       ).then(() => {
        //         console.log("user record inserted!");
        //         process.exit(0);
        //       }).catch(err => {
        //         console.error(err);
        //         process.exit(1);
        //       });
        //     });
        // });
    });
  });