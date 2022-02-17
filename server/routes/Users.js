const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middlewares/AuthMiddleware");
const { sign } = require("jsonwebtoken");
var randtoken = require('rand-token');
var nodemailer = require('nodemailer');

function sendEmail(email, token) {
 
  var email = email;
  var token = token;

  var mail = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'duong1906ltv@gmail.com', // Your email id
          pass: 'DD.1510.nn' // Your password
      }
  });

  var mailOptions = {
      from: 'tutsmake@gmail.com',
      to: email,
      subject: 'Reset Password Link - Tutsmake.com',
      html: '<p>You requested for reset password, kindly use this <a href="http://localhost:3000/reset-password/' + token + '">link</a> to reset your password</p>'

  };

  mail.sendMail(mailOptions, function(error, info) {
      if (error) {
          console.log(1)
      } else {
          console.log(0)
      }
  });
}
router.post('/reset-password-email', async(req, res)=> {
 
  const email = req.body.email;
  const user = await Users.findOne({ where: { user_email: email } });
  if (!user) res.json({ error: "User Doesn't Exist" });
  const token = randtoken.generate(20)
  const sent = sendEmail(email,token);
  if (sent !=0){
    await Users.update({ token: token }, { where: { user_email: email } });
    res.json("The reset password link has been sent to your email address")
  }
  else{
    res.json("SOme thing went wrong!!!")
  }
})
router.post("/", async (req, res) => {
    const { user_email, username, user_password } = req.body;
    bcrypt.hash(user_password, 10).then((hash) => {
      Users.create({
        user_email : user_email,
        username: username,
        user_password: hash,
      });
      res.json("SUCCESS");
    });
  });
  
router.post("/login", async (req, res) => {
const { username, user_password } = req.body;

const user = await Users.findOne({ where: { username: username } });

if (!user) res.json({ error: "User Doesn't Exist" });

bcrypt.compare(user_password, user.user_password).then(async (match) => {
    if (!match) res.json({ error: "Wrong Username And Password Combination" });

    const accessToken = sign(
    { username: user.username, id: user.id },
    "importantsecret"
    );
    res.json({ token: accessToken, username: username, id: user.id });
});
});
router.get("/auth", validateToken, (req, res) => {
    res.json(req.user);
});
router.put("/changepassword", validateToken, async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    const user = await Users.findOne({ where: { username: req.user.username } });
  
    bcrypt.compare(oldPassword, user.user_password).then(async (match) => {
      if (!match) res.json({ error: "Wrong Password Entered!" });
  
      bcrypt.hash(newPassword, 10).then((hash) => {
        Users.update(
          { user_password: hash },
          { where: { username: req.user.username } }
        );
        res.json("SUCCESS");
      });
    });
});
router.get("/GetAllUsers", async (req, res) => {
  const listOfUserss = await Users.findAll();
  res.json(listOfUserss);
});
router.put("/UpdateRole", async (req, res) => {
  const { newRole, id } = req.body;
  await Users.update({ user_role: newRole }, { where: { id: id } });
  res.json(req.body);
  console.log(req.body)
});
router.post("/AddUser", async (req, res) => {
  const user = req.body;
  bcrypt.hash(user.user_password, 10).then((hash) =>{
    user.user_password = hash;
    Users.create(user)
    res.json("SUCCESS")
  })
  
});
router.put("/EditUser/:userId", async (req, res) => {
  const id = req.params.userId;
  const newUser = req.body;
  bcrypt.hash(newUser.user_password, 10).then((hash) =>{
    newUser.user_password = hash;
    Users.update({
      user_firstname: newUser.user_firstname,
      username: newUser.username,
      user_email: newUser.user_email,
      user_role: newUser.user_role,
      user_lastname: newUser.user_lastname,
      user_password: hash,
    }, {where: {id: id}});
    res.json("SUCCESS")
  })
  res.json(id)
});

module.exports = router;