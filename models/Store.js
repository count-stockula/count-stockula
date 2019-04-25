const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
  name: { type: String, required: true, unique: true },
  street: String,
  city: String,
  state: String,
  phone: String,
  userId: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }]
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;
