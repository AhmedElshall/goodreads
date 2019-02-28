const express = require("express");
const router = express.Router();
const Admin = require("../models/userModel");
const Catogry = require("../models/categoryModel");
const Book = require("../models/booksModel");
const Author = require("../models/authorsModel");
const Status = require("../models/statusModel");
const authenticate = require("../middleWare/authenticate");

router.post('/', authenticate, (req, res) => {
    const userId1 = req.user._id;
    const bookId1 = req.body.bookId;
   
    const status1 = req.body.status;

    const status= new Status({
        userId: userId1,
        bookId: bookId1,
        status: status1
    });

    status.save((err) => {
        if (!err) res.send('User Book created successfully');
        else res.send('Error while saving');
    })
});

router.get('/', authenticate, (req, res) => {
    UserBook.find({ userId: req.user._id })
        .populate({ path: 'bookId', populate: { path: 'authId' } })
        .exec(function (err, data) {
            if (!err) {
                //  console.log(data);
                const myData = [];
                data.forEach( (obj)=> {
                    //console.log(obj.bookId[0].authId[0]._id);
                    const data = {
                        bookId: obj.bookId[0]._id,
                        bookImg: obj.bookId[0].image,
                        bookName: obj.bookId[0].name,
                        avgRate: obj.bookId[0].avgRate,
                        authId: obj.bookId[0].authId[0]._id,
                        authName: obj.bookId[0].authId[0].fname + obj.bookId[0].authId[0].lname,
                        rate: obj.rate,
                        status: obj.status
                    }
                    myData.push(data);
                })
                res.send(myData);
            } else {
                res.send(err);
            }
        })
})

router.get('/read', authenticate, (req, res) => {
    UserBook.find({ userId: req.user._id })
        .populate({ path: 'bookId', populate: { path: 'authId' } })
        .exec(function (err, data) {
            if (!err) {
                const myData = [];

                data.forEach( (obj)=> {
                    if (obj.status === "Read") {
                        const obj = {
                            bookId: obj.bookId[0]._id,
                            bookImg: obj.bookId[0].image,
                            bookName: obj.bookId[0].name,
                            avgRate: obj.bookId[0].avgRate,
                            authId: obj.bookId[0].authId[0]._id,
                            authName: obj.bookId[0].authId[0].fname + obj.bookId[0].authId[0].lname,
                            rate: obj.rate,
                            status: obj.status
                        }
                        myData.push(obj);
                    }
                })
                res.send(myData);
            } else {
                res.send(err);
            }
        })
})

router.get('/cread', authenticate, (req, res) => {
    UserBook.find({ userId: req.user._id })
        .populate({ path: 'bookId', populate: { path: 'authId' } })
        .exec(function (err, data) {
            if (!err) {
                const myData = [];

                data.forEach(function (obj) {
                    if (obj.status === "Currently Reading") {
                        const obj = {
                            bookId: obj.bookId[0]._id,
                            bookImg: obj.bookId[0].image,
                            bookName: obj.bookId[0].name,
                            avgRate: obj.bookId[0].avgRate,
                            authId: obj.bookId[0].authId[0]._id,
                            authName: obj.bookId[0].authId[0].fname + obj.bookId[0].authId[0].lname,
                            rate: obj.rate,
                            status: obj.status
                        }
                        myData.push(obj);
                    }
                })
                res.send(myData);
            } else {
                res.send(err);
            }
        })
})

router.get('/wread', authenticate, (req, res) => {
    UserBook.find({ userId: req.user._id })
        .populate({ path: 'bookId', populate: { path: 'authId' } })
        .exec(function (err, data) {
            if (!err) {
                const myData = [];

                data.forEach(function (obj) {
                    if (obj.status === "Want To Read") {
                        const obj = {
                            bookId: obj.bookId[0]._id,
                            bookImg: obj.bookId[0].image,
                            bookName: obj.bookId[0].name,
                            avgRate: obj.bookId[0].avgRate,
                            authId: obj.bookId[0].authId[0]._id,
                            authName: obj.bookId[0].authId[0].fname + obj.bookId[0].authId[0].lname,
                            rate: obj.rate,
                            status: obj.status
                        }
                        myData.push(obj);
                    }
                })
                res.send(myData);
            } else {
                res.send(err);
            }
        })
})

router.put('/rate/:id', authenticate, (req, res) => {
    const userId1 = req.user._id;
    const bookId1 = req.params.id;
    const rate1 = req.body.rate;
    UserBook.updateOne({ userId: userId1, bookId: bookId1 }, { $set: { rate: rate1 } }, (err) => {
        if (!err) {
           Book.calcAvgRate(bookId1).then((avgRate1)=>{
            Book.updateOne({ _id: bookId1 }, { $set: { avgRate: avgRate1 } }, (err) => {
                if (!err) res.send('Done');
                else res.send("Error")
            })
           });
           // console.log(avgRate);
          
        }
        else {
            res.send("an error occured");
        }
    });

});

router.put('/status/:id', authenticate, (req, res) => {
    const userId1 = req.user._id;
    const bookId1 = req.params.id;
    const status1 = req.body.status;
    UserBook.updateOne({ userId: userId1, bookId: bookId1 }, { $set: { status: status1 } }, (err) => {
        if (!err) res.send('Status updated');
        else {
            res.send("an error occured");
        }
    });
});



router.post('/bookReview/:id', authenticate, (req, res) => {
    const userId1 = req.user._id;
    const bookId1 = req.params.id;
    const review1 = req.body.review;
    const bookReview = new BookReview({
        userId: userId1,
        bookId: bookId1,
        review: review1,
    });
    bookReview.save((err) => {
        if (!err) res.send('bookReview was saved');
        else {
            res.send("an error occured");
        }
    })
});




module.exports = router;
