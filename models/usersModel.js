const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, match: /\w+\@\w+/ },
  photo: { type: String },
  isAdmin:{type:Boolean}
});

const users = mongoose.model("users", userSchema);

module.exports = users;
