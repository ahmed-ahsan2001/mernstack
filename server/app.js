const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
mongoose.set("strictQuery", false);
dotenv.config({ path: "./config.env" });
const DB = process.env.DATABASE;
//midle ware

mongoose
  .connect(DB)
  .then(() => {
    console.log("connected successfully");
  })
  .catch((err) => {
    console.log("mo connection");
  });
const middleware = (req, res, next) => {
  console.log("hello my middleware");
};

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/about", middleware, (req, res) => {
  res.send("hello world fron about");
});

app.get("/contact", (req, res) => {
  res.send("hello world fron contact");
});

app.get("/signup", (req, res) => {
  res.send("hello world from signup");
});

app.get("/signin", (req, res) => {
  res.send("hello world fron signin");
});

app.listen(3000, () => {
  console.log("port is running at 3000");
});
