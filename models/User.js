const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  userPass: { type: String, required: true },
  name: String,  
  phoneNumber: String,
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "Store",
    required: true
  },
  management: { type: Boolean, default: false }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
