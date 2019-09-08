const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//Koneksi DB
dotenv.config();
mongoose.connect(process.env.DB_CONNECT,
 { useNewUrlParser: true },
 () => console.log('Terkoneksi ke DB!')
);

const app = express();

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use('/users', require('./routes/user'));

//Server
const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Server Berjalan di port ${port}`);