const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
require("../db/conn");
const User = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("hello world");
});

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;
  if (!name || !email || !phone || !work || !password || !cpassword) {
    res.status(422).json({ error: "Please fill the details correctly" });
  }
  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(402).json({ error: "details already present" });
    } else if (password != cpassword) {
      return res.status(402).json({ error: "password not same" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });
      await user.save();
      res.status(201).json({ message: "User Successfully registered" });
    }
  } catch {
    console.log(err);
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "plz fill data" });
    }
    const userLogin = await User.findOne({ email: email });
    console.log(userLogin);
    const isWait = await bcrypt.compare(password, userLogin.password);
    if (!userLogin || !isWait) {
      res.status(400).json({ error: "invalid credentials" });
    } else {
      res.json({ message: "user signin successfully" });
    }
  } catch (error) {}
});

module.exports = router;
