const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const hostName = "127.0.0.1";
const path = require("path");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/nodeblog_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static("public"));

// Template Engine

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("main/index");
});

app.get("/about", (req, res) => {
  res.render("main/about");
});

app.get("/blog", (req, res) => {
  res.render("main/blog");
});

app.get("/contact", (req, res) => {
  res.render("main/contact");
});

app.get("/login", (req, res) => {
  res.render("main/login");
});

app.get("/register", (req, res) => {
  res.render("main/register");
});

app.listen(port, () => {
  console.log(`Server listening at http://${hostName}:${port}`);
});
