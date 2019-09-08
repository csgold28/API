const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Creat Schema
const userSchema = new Schema({
 email: String,
 password: String
});

//CReat Model
const User = mongoose.model('user', userSchema);

//Export Model
module.exports = User;