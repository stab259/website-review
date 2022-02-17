const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.static('public'));
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ("GET,POST,PUT,DELETE"),
  credentials: true
}))

const db = require("./models");

const usersRouter = require("./routes/Users");
app.use("/users", usersRouter);

const areasRouter = require("./routes/Areas");
app.use("/areas", areasRouter);
const likesRouter = require("./routes/Likes");
app.use("/likes", likesRouter)
const postRouter = require("./routes/Posts");
app.use("/posts", postRouter);
const commentsRouter = require("./routes/Comments");
app.use("/comments", commentsRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});