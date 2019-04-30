const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeItemSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  upc: String,
  caseSize: Number,
  currentQty: { type: Number, required: true, default: 0 },
  criticalQty: { type: Number, required: true, default: 0 },
  alertStatus: { type: Boolean, default: true},
  pictureUrl: String,
  noScan: { type: Boolean, default: false },
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "Store"
  }
});

const StoreItem = mongoose.model("StoreItem", storeItemSchema);

module.exports = StoreItem;
