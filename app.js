const auth = require("./auth");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
var app = express();
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const cors = require("cors");
const registerRoute = require("./routes/register_route");
const categoryRoute = require("./routes/category_route");
const uploadRouter = require('./routes/upload_route');
const productRouter = require('./routes/products_router');
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(morgan("tiny"));
app.use(express.json());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));
require("./db/spareparts");
app.use(express.json());

//app.use(registerRoute);
app.use("/register", registerRoute);
app.use("/category", categoryRoute);
app.use('/upload', uploadRouter);
app.use('/product', productRouter);
app.use(auth.verifyUser);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.statusCode = 500;
  res.json({ status: err.message });
});

app.listen(process.env.PORT, () => {
  console.log(`App is running at localhost:${process.env.PORT}`);
});
