const mongoose = require("mongoose");

const rateSchema = new mongoose.Schema({
  rate: { type: Number },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "books" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
});

const rates = mongoose.model("rates", rateSchema);
module.exports = rates;
