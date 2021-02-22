const express = require("express");
const app = express();
const port = 3000;
const hostName = "127.0.0.1";
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "main/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "main/about.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.resolve(__dirname, "main/blog.html"));
});

app.listen(port, () => {
  console.log(`Server listening at http://${hostName}:${port}`);
});
