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

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});