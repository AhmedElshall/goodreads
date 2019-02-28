const express = require("express");
const router = express.Router();
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Book = require("../models/booksModel");
const Author = require("../models/authorsModel");
const Category = require("../models/categoryModel");
const authenticate = require("../middleWare/authenticate");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  }
});

const fileFilter = (req, file, cb) => {
  // reject a file
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5
  },
  fileFilter: fileFilter
});

//Login
router.post("/login", (req, res) => {
  const body = _.pick(req.body, ["email", "password"]);

  User.findByEmail(body.email, body.password)
    .then(user => {
      return user.generateAuthToken().then(token => {
        res.header("x-auth", token).send(user);
      });
    })
    .catch(e => {
      res.status(400).send("error");
    });
});

//signUP
router.post("/create", upload.single("photo"), (req, res) => {
  console.log(req.body);
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const photo = req.file.path;
  const isadmin=req.body.isAdmin;
  const user = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
    photo: photo,
    isAdmin:isadmin
  });

  user
    .save()
    .then(() => {
      return user.generateAuthToken();
    })
    .then(token => {
      res.header("x-auth", token).send(user);
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

//Search

router.get('/search/:name',(req, res) => {
 
  const input = req.params.name;
  
  Book.find({name: input}, (err, book) => {
      if(!err){
        Author.find({firstName: input}, (err, author) => {
          if(!err){
            Category.find({name: input}, (err, category) => {
              if(!err){
                const obj = {
                  books : book,
                  authors: author,
                  categories: category
                }
                res.send(obj);
              } else {
                res.send(err);
              }
            })
          } else {
            res.send(err);
          }
        })
      } else{
        res.send(err);
      }
  })
  
});






//logout
router.delete("/logout", authenticate, (req, res) => {
   console.log("ahmed");
  req.user.removeToken(req.token).then(
    () => {
     
      res.status(200).send("User Logout Successfully");
    },
    () => {
       
      res.status(400).send("Error");
    }
  );
});

module.exports = router;
