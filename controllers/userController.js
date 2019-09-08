const Jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {
 register: async (req, res, next) => {
  //Email & Password
  const { email, password } = req.value.body;
  //Cek data user
  const foundUser = User.findOne({ email });
  if (foundUser) {
   return res.status(403).json({
    error: 'E-mail Sudah terdafar!'
   });
  }
  //Creat User
  const newUser = new User({
   email,
   password
  });
  await newUser.save();
  res.json({ user: 'Created!' });


 },
 login: async (req, res, next) => {
  //Generate Token
  console.log('UserController.login() called!');
 },
 secret: async (req, res, next) => {
  console.log('UserController.secret() called!');
 }
}