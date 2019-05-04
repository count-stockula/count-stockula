const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
  purchaseDate: {type: Date, required: true},
  customerEmail: {type: String, required:true},
  employeeId:{
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  storeId:{
    type: Schema.Types.ObjectId,
    ref: "Store"
  },
  items:[{
    type: Schema.Types.ObjectId,
    ref: "StoreItem"
  }]
});

const Purchase = mongoose.model("Purchase", purchaseSchema);

module.exports = Purchase;