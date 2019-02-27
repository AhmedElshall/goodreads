const express = require("express");
const router = express.Router();

const Admin = require("../models/userModel");
const Catogry = require("../models/categoryModel");
const Book = require("../models/booksModel");
const Author = require("../models/authorsModel");
const User = require("../models/userModel");

router.post("/login", (req, res) => {
  User.findByEmail(req.body.email, req.body.password)
    .then(sucess => {
      res.send("Sucess");
    })
    .catch(error => {
      res.send("Error");
    });
});

router.get("/category", (req, res) => {
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

router.get("/books", (req, res) => {
  Book.find({}, (err, books) => {
    if (!err) res.send(books);
    else {
      res.send("an error occured");
    }
  });
});
router.get("/authors", (req, res) => {
  Author.find({}, (err, authors) => {
    if (!err) res.send(authors);
    else {
      res.send("an error occured");
    }
  });
});

// LOG IN ///
router.post("/", (req, res) => {
  const _email = req.body.email;
  const _password = req.body.password;
  Admin.find({ email: _email }, (err, admin) => {
    if (!err) {
      if (admin.isAdmin == true && admin.password == _password) {
        res.send(admin);
      } else {
        res.send("wrong data");
      }
    } else {
      res.send("admin not found check again ");
    }
  });
});

router.post("/book", (req, res) => {
  const bookName = req.body.name;
  const bookPhoto = req.body.photo;
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

router.post("/category/add", (req, res) => {
  const name1 = req.body.name;
  const catogry = new Catogry({
    name: name1
  });
  catogry.save(err => {
    if (!err) res.send("category was saved");
    else {
      res.send("an error occured");
    }
  });
});

router.post("/author", (req, res) => {
  const fname = req.body.firstName;
  const lname = req.body.lastName;
  const dataofbirth = req.body.dataOfBirth;
  const image = req.body.photo;
  const author = new Author({
    firstName: fname,
    lastName: lname,
    dataOfBirth: dataofbirth,
    photo: image
  });
  /*
  author.save()
    .then(sucess => {
      res.send("author was saved");
    })
    .catch(() => {
      res.send("an error occured");
    });

    */
  author.save(err => {
    if (!err) res.send("author was saved");
    else {
      res.send("an error occured");
    }
  });
});
router.get("/book/:id", (req, res) => {
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

router.get("/category/:id", (req, res) => {
  const name = req.body.name;
  const id = req.params.id;
  Catogry.updateOne({ _id: id }, { $set: { name: name } }, err => {
    if (!err) res.send("category updated!");
    else {
      res.send("an error occured");
    }
  });
});

router.get("/author/:id", (req, res) => {
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

router.get("/book/:id", (req, res) => {
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

router.delete("/author/:id", (req, res) => {
  const id = req.params.id;
  Author.deleteOne({ _id: id }, err => {
    if (!err) res.send("author Deleted");
    else {
      res.send("an error occured");
    }
  });
});

module.exports = router;
