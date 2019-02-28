const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String },
  authId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Author" }],
  catId: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }]
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
