const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/register", (req, res) => {
  res.render("main/register");
});

router.post("/register", (req, res) => {
  User.create(req.body, (error, user) => {
    console.log(error, user);
  });
  res.render("main/register");
});

router.get("/login", (req, res) => {
  res.render("main/login");
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (error, user) => {
    if (user) {
      if (user.password === password) {
        res.redirect("/");
      } else {
        res.redirect("/users/login");
      }
    } else {
      res.redirect("/users/register");
    }
  });
});

module.exports = router;
