const express = require("express");
const router = express.Router();
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const multer = require("multer");
const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
var { authenticate } = require("../middleWare/authenticate");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "demo",
  allowedFormats: ["jpg", "png"],
  transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const parser = multer({ storage: storage });

router.post("/photo", parser.single("photo"), (req, res) => {
  console.log(req.file);
  const photo = {};
  photo.url = req.file.url;
  photo.id = req.file.public_id;
  User.photo
    .create(photo)
    .then(newphoto => res.json(newphoto))
    .catch(err => console.log(err));
});

router.get("/", (req, res) => {
  //   User.find({}, (err, books) => {
  //     if (!err) res.send(books);
  //     else{
  //         res.send("an error occured");
  //     }
  // });
});

//Login
router.post("/login", (req, res) => {
  var body = _.pick(req.body, ["email", "password"]);
  User.findByEmail(body.email, body.password)
    .then(user => {
      return user.generateAuthToken().then(token => {
        res.header("x-auth", token).send(user);
      });
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

//signUP
router.post("/create", (req, res) => {
  var body = _.pick(req.body, ["firstName", "lastName", "email", "password"]);
  var user = new User(body);
  console.log(body);
  user
    .save()
    .then(success => {
      console.log("token");
      return user.generateAuthToken();
    })
    .then(token => {
      console.log("token");
      res.header("x-auth", token).send(user);
      //console.log("hjksdhdhk");
    })
    .catch(e => {
      res.status(400).send(e);
    });
});

// router.get('/me', authenticate, (req, res) => {
//     res.send(req.user);
//   });

// router.post('/:isAdmin', (req, res) => {
//     const tfname = req.body.fname;
//     const tlname = req.body.lname;
//     const temail = req.body.email;
//     const tpassword = req.body.password;
//     const tphoto = req.body.photo;
//     const tisAdmin = req.params.isAdmin;
//     const user = new User({
//         fname: tfname,
//         lname: tlname,
//         email: temail,
//         password: tpassword,
//         photo: tphoto,
//         isAdmin: tisAdmin
//     });
//     user.save((err) => {
//         if(!err) res.send("User was saved successfully");
//         else res.send("Error while saving");
//     });
// });

// router.put('/:id',(req, res) => {
//     const tfname = req.body.fname;
//     const tlname = req.body.lname;
//     const temail = req.body.email;
//     const tpassword = req.body.password;
//     const tphoto = req.body.photo;
//     const id = req.params.id;
//     User.updateOne({_id:id}, { $set: {fname: tfname, lname: tlname, email: temail, password: tpassword, photo: tphoto} }, (err) => {
//         if(!err) res.send("Updated Successfully");
//         else res.send("Failed to update");
//     })
// })

// router.delete('/:id', (req, res) => {
//     const id = req.params.id;
//     User.deleteOne({ _id: id }, (err) => {
//         if (!err) res.send('Deleted Successfully');
//         else{
//             res.send("Error Occured");
//         }
//     })
// })

module.exports = router;
