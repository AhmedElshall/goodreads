const express = require("express");
const router = express.Router();
const Admin = require("../models/userModel");
const Category = require("../models/categoryModel");
const Books = require("../models/booksModel");
const Author = require("../models/authorsModel");
const Users = require("../models/userModel");
const authenticate = require("../middleWare/authenticate");
const multer = require("multer");
const mongoose = require("mongoose");
/////////////////////

const Status = require("../models/statusModel");
const User = require("../models/userModel");
const BOOKS = require("../models/booksModel");
const Rates = require("../models/ratesModel");
const Authors = require("../models/authorsModel");
///////////////

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

//////////////////////////////////////////////

/////////////////////////////
/////////////////////////////////////

let data = {
  photo: "",
  bookName: "",
  bookId: 0,
  status: "1",
  authorName: "",
  authorId: 0,
  ratte: 0,
  rateId: 0
};
let books = [];
let authors = [];
let rates = [];
let state = [];

//db.status.find({userId:[ObjectId("5c73116ed37ae01d2481cc1f")]})
function getall(id, callback) {
  Status.find({ userId: [mongoose.Types.ObjectId(id)] })
    .populate({ path: "bookId" })
    .exec(function(err, all) {
      //  console.log(all[0].userId.firstName);
      //console.log(all);
      //authorsaa=global.authorsaa;
      all.map(objectofStatus => {
        books.push(objectofStatus.bookId);
        // books=objectofStatus.bookId;
        //callback();
      });
      //console.log(books)
      books.map(book => {
        //console.log(book[0].authId);

        if (book[0].authId.length != 0) {
          // console.log(book[0].authId[0] + "hhhhhhhhhhhhhhhhhhhhhhhh");

          BOOKS.find({ authId: book[0].authId[0] })
            .populate({ path: "authId" })
            .exec(function(err, allAuthor) {
              //console.log(book[0].authId[0]);

              //console.log(allAuthor[0].authId);
              console.log(allAuthor.authId);

              //authors=allAuthor;

              authors.push(allAuthor[0].authId);
              console.log(book[0]._id);
              //db.rates.find({bookId:[ObjectId("5c73c7e51a1eed2efa894214")],userId:[ObjectId("5c73116ed37ae01d2481cc1f")]})

              Rates.find(
                { bookId: [book[0]._id], userId: [id] },
                (err, allrates) => {
                  //console.log(allrates);

                  rates.push(allrates);
                  callback();
                }
              );
              //console.log(allAuthor[0].authId);
              //callback();
            });

          // console.log(book);

          //callback();
        }
      });
      callback();
      //console.log(authors);

      // books.map(book=>{
      // //console.log(typeof book.name);

      // //    Rates.find({bookId:[mongoose.Types.ObjectId(book.id)]}).populate({path:'userId'}).exec(function(err,AllRates){

      // //  //console.log(allAuthor);
      // //  rates.push(AllRates);
      // //   console.log(AllRates);
      // //  data.photo=book.photo;
      // //  data.bookName=book.name;
      // //    });

      // })
    });
}
///////////////////////////////////////////
//////////////////////////////////

let categoreyAll = [];
let booksAll = [];
let authorsAll = [];
let isLogged = false;
//////////////////////////////////////
let getCategorey = function(req, res, next) {
  Category.find({}, (err, categorey) => {
    if (!err) {
      if (categorey) {
        categoreyAll = categorey;
        if (categorey) console.log(categorey);
        console.log(categorey);
        //res.json([{categorey}]);
      } else {
        // res.json([{categorey}]);
        console.log("not exist");
      }
    } else {
      console.log("error in db");
    }
  });
  next();
};
/////////////////////////////////
let getBooks = function(req, res, next) {
  Books.find({}, (err, books) => {
    // console.log(JSON.stringify(err));
    if (!err) {
      if (books) {
        if (books) console.log(books);
        console.log(books);
        booksAll = books;
        //res.json([{books}]);
      } else {
        res.json([{ books }]);
        //console.log("not exist");
      }
    } else {
      res.json([{ books }]);
      // console.log("error in db");
    }
  });
  next();
};
////////////////////////////////////////
let getAuthors = function(req, res, next) {
  Author.find({}, (err, author) => {
    // console.log(JSON.stringify(err));
    if (!err) {
      if (author) {
        authorsAll = author;
        if (author) console.log(author);
        console.log(author);
        //res.json([{categorey}]);
      } else {
        // res.json([{categorey}]);
        console.log("not exist");
      }
    } else {
      console.log("error in db");
    }
  });
  next();
};
///////////////////////////////////////
router.get("/", (req, res) => {});

// router.post("/login", [getCategorey, getBooks, getAuthors], (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;

//   console.log(req.body);
//   Users.findOne({ email: email, password: password })
//     .then(user => {
//       if (user) {
//         isLogged = true;
//         return user.generateAuthToken().then(token => {
//           res
//             .header("x-auth", token)
//             .json([
//               { categorey: categoreyAll },
//               { books: booksAll },
//               { authors: authorsAll },
//               { isLogged: isLogged }
//             ]);
//         });
//       }
//     })
//     .catch(e => {
//       res.status(400).send(e);
//     });
// });

//////////////////////////////////

router.post("/login", (req, res) => {
  console.log(req.body.email);
  Admin.findOne({ email: req.body.email, password: req.body.password })

    .then(sucess => {
      console.log(sucess.id);
      var id = sucess.id;
      if (sucess.isAdmin == true) {
        res.send("sccuess");
      } else {
        // res.send("wrong data");
        //////////////////
        getall(id, function() {
          console.log(authors);
          //  console.log(rates);
          // console.log(books);
          books.forEach(book => {
            book.forEach(boo => {
              if (book[0].length != 0) {
                data.bookName = boo.name;
                data.photo = boo.photo;
                data.bookId = boo.id;
                if (data.status == "1") data.status = "All";
                // console.log(boo.id + "uuuuuuuuuuuuuuuuuuuuuuuuuu");
              }
            });
          });
          authors.forEach(author => {
            console.log(author);

            author.forEach(auth => {
              data.authorName = auth.firstName + " " + auth.lastName;
              data.authorId = auth.id;
              console.log(data.authorName);
            });
          });
          console.log(rates.length);

          rates.forEach(rate => {
            rate.forEach(rat => {
              if (rate.length != 0) {
                data.ratte = rat.rate;
                data.rateId = rat.id;
                //console.log(data.ratte);
                // console.log(rate.rate);
                state.push(data);
                console.log(state);
                res.json(state);
              } else {
                data.ratte = rat.rate;
                data.rateId = rat.id;
                //console.log(data.ratte);
                // console.log(rate.rate);
              }
            });
          });
        });

        ///////////////////
      }
    })
    .catch(error => {
      res.send("Error");
    });
});

router.get("/category", authenticate, (req, res) => {
  Catogry.find({}, (err, cats) => {
    if (!err) {
      var catMap = { value: "", label: "" };
      var cat = [];
      for (let i = 0; i < cats.length; i++) {
        catMap.value = cats[i]._id;
        catMap.label = cats[i].name;
        cat.push(catMap);
      }
      res.send(cat);
    } else {
      res.send("an error occured");
    }
  });
});

router.get("/books", authenticate, (req, res) => {
  Book.find({}, (err, books) => {
    if (!err) res.send(books);
    else {
      res.send("an error occured");
    }
  });
});
router.get("/authors", authenticate, (req, res) => {
  Author.find({}, (err, authors) => {
    if (!err) res.send(authors);
    else {
      res.send("an error occured");
    }
  });
});

router.post("/book", authenticate, upload.single("photo"), (req, res) => {
  const bookName = req.body.name;
  const bookPhoto = req.file.path;
  const CatId = req.body.catId;
  const AuthId = req.body.authId;
  const book = new Book({
    name: bookName,
    photo: bookPhoto,
    catId: CatId,
    authId: AuthId
  });
  book.save(err => {
    if (!err) res.send("book was saved");
    else {
      res.send("an error occured");
    }
  });
});

router.post("/category", authenticate, (req, res) => {
  const name1 = req.body.name;
  console.log(name1);
  const category = new Category({
    name: name1
  });
  category.save(err => {
    if (!err) res.send("category was saved");
    else {
      res.send("an error occured");
    }
  });
});

router.post("/author", authenticate, upload.single("photo"), (req, res) => {
  const fname = req.body.firstName;
  const lname = req.body.lastName;
  const dataofbirth = req.body.dataOfBirth;
  const image = req.file.path;
  const author = new Author({
    firstName: fname,
    lastName: lname,
    dataOfBirth: dataofbirth,
    photo: image
  });

  author.save(err => {
    if (!err) res.send("author was saved");
    else {
      res.send("an error occured");
    }
  });
});
router.get("/book/:id", authenticate, (req, res) => {
  const bookName = req.body.name;
  const catId = req.body.catId;
  const authId = req.body.authId;
  const image = req.body.photo;
  const id = req.params.id;
  Book.updateOne(
    { _id: id },
    { $set: { name: name, catId: catId, authId: authId, image: image } },
    err => {
      if (!err) res.send("Book updated!");
      else {
        res.send("an error occured");
      }
    }
  );
});

router.get("/category/:id", authenticate, (req, res) => {
  const name = req.body.name;
  const id = req.params.id;
  Catogry.updateOne({ _id: id }, { $set: { name: name } }, err => {
    if (!err) res.send("category updated!");
    else {
      res.send("an error occured");
    }
  });
});

router.get("/author/:id", authenticate, (req, res) => {
  const fname = req.body.firstName;
  const lname = req.body.lastName;
  const dataOfBirth = req.body.dataOfBirth;
  const image = req.body.photo;
  const id = req.params.id;
  Author.updateOne(
    { _id: id },
    {
      $set: {
        firstName: fname,
        lastName: lname,
        photo: image,
        dataOfBirth: dataOfBirth
      }
    },
    err => {
      if (!err) res.send("author updated!");
      else {
        res.send("an error occured");
      }
    }
  );
});

router.get("/book/:id", authenticate, (req, res) => {
  const id = req.params.id;
  Book.deleteOne({ _id: id }, err => {
    if (!err) res.send("Book Deleted");
    else {
      res.send("an error occured");
    }
  });
});

router.delete("/category/:id", (req, res) => {
  const id = req.params.id;
  Catogry.deleteOne({ _id: id }, err => {
    if (!err) res.send("category Deleted");
    else {
      res.send("an error occured");
    }
  });
});

router.delete("/author/:id", authenticate, (req, res) => {
  const id = req.params.id;
  Author.deleteOne({ _id: id }, err => {
    if (!err) res.send("author Deleted");
    else {
      res.send("an error occured");
    }
  });
});

module.exports = router;
