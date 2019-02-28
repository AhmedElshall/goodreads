const express = require("express");
const router = express.Router();

const Admin = require("../models/userModel");
const Catogry = require("../models/categoryModel");
const Book = require("../models/booksModel");
const Author = require("../models/authorsModel");

router.get("/", (req, res) => {
  Author.find({}, (err, authors) => {
    if (!err) res.send(authors);
    else {
      res.send("an error occured");
    }
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Author.findById(id, (err, Author) => {
    if (!err) res.send(Author);
    else {
      res.send("an error occured");
    }
  });
});

module.exports = router;
