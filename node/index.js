require("./requires/mongoConfig");
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
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/book", bookRouter);
app.use("/category", categoryRouter);
app.use("/author", authorRouter);

app.listen(PORT, () => {
  console.log(`started on port ${PORT}`);
});
