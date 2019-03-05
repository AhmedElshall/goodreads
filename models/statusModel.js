const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  status: { type: NotEmptyString, enum: ["1", "2", "3"] },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "books" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
});

const status = mongoose.model("status", reviewSchema);
module.exports = status;
