const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOFBirth: { type: Date },
  photo: { type: String }
});

const authors = mongoose.model("authors", authorSchema);
module.exports = authors;
