const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const postRoutes = require("./routes/posts");

const { APP_BASE_HREF } = require('@angular/common');

const app = express();

mongoose.connect("mongodb+srv://corey:lSdZiKoDuUfbpBjz@cluster0.w9guw.mongodb.net/Angular-Forum?retryWrites=true&w=majority")
.then(() => {
  console.log('Connected to the database.')
})
.catch(() => {
  console.log('Connection to database failed.')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods",
  "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

app.use("/api/posts", postRoutes);

module.exports = app;
