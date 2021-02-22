const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("main/index");
});

router.get("/about", (req, res) => {
  res.render("main/about");
});

router.get("/blog", (req, res) => {
  res.render("main/blog");
});

router.get("/contact", (req, res) => {
  res.render("main/contact");
});

router.get("/login", (req, res) => {
  res.render("main/login");
});

router.get("/register", (req, res) => {
  res.render("main/register");
});

module.exports = router;