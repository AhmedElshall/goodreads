const express = require("express");
const router = express.Router();

const Admin = require("../models/userModel");
const Catogry = require("../models/categoryModel");
const Book = require("../models/booksModel");
const Author = require("../models/authorsModel");
const authenticate = require("../middleWare/authenticate");


router.get("/", (req, res) => {
  Author.find({}, (err, authors) => {
    if (!err) res.send(authors);
    else {
      res.send("Error");
    }
  });
});

router.get('/', authenticate, (req, res) => {
    Author.find({}, (err, authors) => {
        if (!err) res.send(authors);
        else{
            res.send("Error");
        }
    });
});


router.get('/:id', authenticate,(req, res) => {
    const authorId1 = req.params.id;
    Author.findById(authorId1, (err, data) => {
        if(!err) {
            Book.find({authId: authorId1}, (err, output) => {
                if(!err){
                    const obj = {
                        authName: data.firstName + data.lastName,
                        authImg:data.photo,
                        dateOfBirth: data.dateOfBirth,
                    }
                    res.send(obj);
                }
            })
        }else{
            res.send(err);
        }
    })
})




module.exports = router;
