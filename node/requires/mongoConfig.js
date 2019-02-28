const mongoose = require("mongoose");

//const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/project";


///////////// Online MONGODB //////////////////////

const MONGO_URL =
    process.env.MONGO_URL ||
    "mongodb+srv://root:root@ahmedelshall-cqaq5.mongodb.net/goodreads?retryWrites=true";

mongoose.connect(
  MONGO_URL,
  {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
  },
  err => {
    if (!err) console.log(`started mongodb connection...`);
  }
);
