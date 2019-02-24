const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  photo: { type: String },
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: "authors" },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" }
});

const books = mongoose.model("books", bookSchema);
module.exports = books;
