const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review: { type: String },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "books" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
});

const reviews = mongoose.model("reviews", reviewSchema);
module.exports = reviews;
