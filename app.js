const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;
const hostName = "127.0.0.1";
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// MongoDB Connect

mongoose.connect("mongodb://127.0.0.1/nodeblog_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Express Static Folder

app.use(express.static("public"));

// Template Engine

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Body Parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes

const main = require("./routes/main");
const posts = require("./routes/posts");
app.use("/", main);
app.use("/posts", posts);

app.listen(port, () => {
  console.log(`Server listening at http://${hostName}:${port}`);
});
