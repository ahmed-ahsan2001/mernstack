const dotenv = require("dotenv");
const mongoose = require("mongoose");
const express = require("express");
const cookie = require("cookie-parser");

const app = express();
app.use(cookie());
mongoose.set("strictQuery", false);
dotenv.config({ path: "./config.env" });
require("./db/conn");
app.use(express.json());

const User = require("./model/userSchema");
const PORT = process.env.PORT;
//midle ware
app.use(require("./router/auth"));
// const middleware = (req, res, next) => {
//   console.log("hello my middleware");
//   next();
// };

app.get("/contact", (req, res) => {
  res.send("hello world fron contact");
});

app.get("/signup", (req, res) => {
  res.send("hello world from signup");
});

app.get("/signin", (req, res) => {
  res.send("hello world fron signin");
});

app.listen(PORT, () => {
  console.log(`port is running at ${PORT}`);
});
