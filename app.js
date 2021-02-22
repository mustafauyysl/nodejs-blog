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

const main = require("./routes/main");
app.use("/", main);

app.listen(port, () => {
  console.log(`Server listening at http://${hostName}:${port}`);
});
