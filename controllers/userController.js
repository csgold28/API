const Jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

module.exports = {
 register: async (req, res, next) => {
  //Cek Data No Hanphone
  const nohpFound = await User.findOne({nohp: req.body.nohp});
  if(nohpFound) return res.status(400).json({error: 'No. Hanphone sudah terdaftar'});

  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Creat User
  const user = new User({
    name: req.body.name,
    nohp: req.body.nohp,
    password: hashedPassword
  });
  try{
      const saveUser = await user.save();
      res.json({massage: 'Pendaftaran Member Baru Suskses!'});
  }catch{
      res.status(400).json({message: 'Pendaftaran Gagal!'});
  }
 },

 login: async (req, res, next) => {
  //Generate Token
  console.log('UserController.login() called!');
 },
 secret: async (req, res, next) => {
  console.log('UserController.secret() called!');
 }
}