const express = require("express");
const router = express.Router();
const Post = require("../models/Post");
const path = require("path");

router.get("/new", (req, res) => {
  res.render("main/addPost");
});

router.get("/:id", (req, res) => {
  Post.findById(req.params.id).then((post) => {
    res.render("main/post", { post });
  });
});

router.post("/test", (req, res) => {
  let image = req.files.image;
  image.mv(path.resolve(__dirname, "../public/img/postimages", image.name));
  Post.create({
    ...req.body,
    image: image.name,
  });
  res.redirect("/");
});

module.exports = router;
