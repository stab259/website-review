const express = require("express");
const router = express.Router();
const { upload } = require("../middlewares/uploadMiddleware");
const { Posts, Likes } = require("../models");

const { validateToken } = require("../middlewares/AuthMiddleware");

router.get("/", validateToken, async (req, res) => {
  const listOfPosts = await Posts.findAll({ include: [Likes] });
  const likedPosts = await Likes.findAll({ where: { UserId: req.user.id } });
  res.json({ listOfPosts: listOfPosts, likedPosts: likedPosts });
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Posts.findOne({where: { id: id },include: [Likes]});
  res.json(post);
});

router.get("/byuserId/:id", async (req, res) => {
  const id = req.params.id;
  const listOfPosts = await Posts.findAll({
    where: { UserId: id },
    include: [Likes],
  });
  res.json(listOfPosts);
});

router.post("/", validateToken, async (req, res) => {
  const post = req.body;
  post.username = req.user.username;
  post.UserId = req.user.id;
  await Posts.create(post);
  res.json(post);
});

router.put("/title", validateToken, async (req, res) => {
  const { newTitle, id } = req.body;
  await Posts.update({ title: newTitle }, { where: { id: id } });
  res.json(newTitle);
});

router.put("/postText", validateToken, async (req, res) => {
  const { newText, id } = req.body;
  await Posts.update({ postText: newText }, { where: { id: id } });
  res.json(newText);
});

router.delete("/:postId", validateToken, async (req, res) => {
  const postId = req.params.postId;
  await Posts.destroy({
    where: {
      id: postId,
    },
  });

  res.json("DELETED SUCCESSFULLY");
});


router.post("/upload", upload.single('file'),validateToken, (req, res) => {
    if (!req.file) {
        console.log("No file upload"); 
    } else {
        const user_id = req.user.id
        const title = req.body.title
        const content = req.body.content
        const username = req.user.username
        var imgsrc = 'http://127.0.0.1:3001/images/' + req.file.filename
        Posts.create({
            title : title,
            postText: content,
            username: username,
            imgsrc : imgsrc,
            UserId : user_id   
          });
    }
});

router.put("/EditPost/:id", upload.single('file'),validateToken, (req, res) => {
  if (!req.file) {
      console.log("No file upload"); 
  } else {
      const user_id = req.user.id
      const title = req.body.title
      const content = req.body.content
      const username = req.user.username
      var imgsrc = 'http://127.0.0.1:3001/images/' + req.file.filename
      Posts.update({
          title : title,
          postText: content,
          username: username,
          imgsrc : imgsrc,
          UserId : user_id   
        }, { where: { id: id } });
  }
});
module.exports = router;