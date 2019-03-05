require("./requires/mongoConfig");
const mongoose = require("mongoose");
const body_parser = require("body-parser");
var cors = require("cors");
const express = require("express");
const app = express();
const adminRouter = require("./routes/adminRouter");
const userRouter = require("./routes/userRouter");
const bookRouter = require("./routes/bookRouter");
const authorRouter = require("./routes/authorRouter");
const categoryRouter = require("./routes/categoryRouter");
const authenticate = require("./middleWare/authenticate");
//var session=require('express-session');

const Status = require("./models/statusModel");
const User = require("./models/userModel");
const BOOKS = require("./models/booksModel");
const Rates = require("./models/ratesModel");
const Authors = require("./models/authorsModel");


const PORT = process.env.PORT || 4000;
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
// app.use(session({
//   secret:'keyboard cat',
//   resave:false,
//   saveUninitialized:true
// }))


app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/book", bookRouter);
app.use("/category", categoryRouter);
app.use("/author", authorRouter);
/////////////////////////////
/////////////////////////////////////

let data={
  photo:"",
  bookName:"",
  bookId:0,
  status:"1",
  authorName:"",
  authorId:0,
  ratte:0,
  rateId:0

}
let books=[]
let authors=[];
let rates=[]
let state=[]

//db.status.find({userId:[ObjectId("5c73116ed37ae01d2481cc1f")]})
function getall(id,callback){

Status.find({userId:[mongoose.Types.ObjectId(id)]}).populate({path:'bookId'}).exec(function(err,all){
 //  console.log(all[0].userId.firstName);
  //console.log(all);
  //authorsaa=global.authorsaa;
  all.map((objectofStatus)=>{


   books.push(objectofStatus.bookId)
  // books=objectofStatus.bookId;
//callback();
   });
//console.log(books)
books.map(book=>{
  //console.log(book[0].authId);
  
if(book[0].authId.length!=0){

 BOOKS.find({authId:book[0].authId[0]}).populate({path:'authId'}).exec(function(err,allAuthor){
//console.log(book[0].authId[0]);

//console.log(allAuthor[0].authId);
//authors=allAuthor;

authors.push(allAuthor[0].authId);
console.log(book[0]._id);
//db.rates.find({bookId:[ObjectId("5c73c7e51a1eed2efa894214")],userId:[ObjectId("5c73116ed37ae01d2481cc1f")]})

Rates.find({bookId:[book[0]._id],userId:[id]},(err,allrates)=>{
//console.log(allrates);

  rates.push(allrates);
  callback();
  })
//console.log(allAuthor[0].authId);
//callback();

 });

// console.log(book);


//callback();
}

})
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



 })
}

////////////////////////////////////////
app.post("/All/:id", (req, res) => {

  // const rateee = new Rates({
  //  rate: "2",
  //   bookId:"5c7ced5b4a2fe32dae3f7c3d",
  //   userId:"5c73116ed37ae01d2481cc1f"
   
  // });

  // rateee.save()

//var bookkkk=new BOOKS({"authId":"5c7ceadcef14f72c57a4c2a4","catId":[],"name":"scary","photo":"dfdf"}).save()

// var authornew=new Authors(

//   {
//     firstName: "author1",
//     lastName: "authhhh",
//     dateOFBirth:"1995-06-22T16:00:00Z",
//     photo: "cdfd"
//   }
// ).save()

//db.rates.find({"userId":[ObjectId("5c711a53ee56261428c86e07")]})


const id=req.params.id;
  

 console.log(id);
 
getall(id,function(){
   console.log(authors);
   console.log(rates);
   console.log(books);
  books.forEach(book=>{
    book.forEach(boo=>{

      if(book[0].length!=0)
{
  data.bookName=boo.name;
  data.photo=boo.photo;
  data.bookId=boo.id;
  console.log(boo.id+"uuuuuuuuuuuuuuuuuuuuuuuuuu");
  
  
}
    })

  })
  authors.forEach(author=>{
    author.forEach(auth=>{

      data.authorName=auth.firstName+" "+auth.lastName;
    data.authorId=auth.id;
    console.log(auth);
    })
    

  })
  rates.forEach(rate=>{
    rate.forEach(rat=>{

      if(rate.length!=0)
      {
   data.ratte=rat.rate;
      data.rateId=rat.id;
      //console.log(data.ratte);
     // console.log(rate.rate);
     state.push(data);
     console.log(state);
     res.json(state)
      }
     else
       {
   data.ratte=rat.rate;
      data.rateId=rat.id;
      //console.log(data.ratte);
     // console.log(rate.rate);
      }

    })

    

  })
 
  
})
   
 //console.log(authors);
 
  
 });







///////////////////
app.listen(PORT, () => {
  console.log(`started on port ${PORT}`);
});
