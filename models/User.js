const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");
const saltRounds = 10;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
  phone: String,
  storeId: {
    type: Schema.Types.ObjectId,
    ref: "Store",
    required: true
  },
  management: { type: Boolean, default: false }
});

userSchema.pre("save", function(next) {
  // if document is new or new password set
  if (this.isNew || this.isModified("password")) {
    // saving reference for changing scopes
    const document = this;
    bcrypt.hash(document.password, saltRounds, function(err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

/*
userSchema.methods.isCorrectPassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, match) {
    if (err) {
      callback(err);
    } else {
      callback(err, match);
    }
  });
};
*/

const User = mongoose.model("User", userSchema);

module.exports = User;