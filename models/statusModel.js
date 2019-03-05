const mongoose = require("mongoose");

const statusSchema = new mongoose.Schema({
  status:[{type: String, enum: ['1', '2', '3']}],
  bookId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }],
  userId: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }]
});

const status = mongoose.model("status", statusSchema);
module.exports = status;
