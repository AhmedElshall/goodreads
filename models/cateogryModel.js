const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "books" }
});

const categories = mongoose.model("categories", categoriesSchema);
module.exports = categories;
