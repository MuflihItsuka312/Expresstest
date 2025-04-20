require('dotenv').config();
const express = require('express');
const path = require('path');
const session = require('express-session');
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// const DB_URI = 'mongodb://localhost:27017/manga'; //fix

const app = express();
// const PORT = process.env.PORT || 3000;

//set template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//index.ejs
app.get('/', function(req, res) {
  res.render('index');
});

//css
app.use(express.static(__dirname + '/public'));

//route prefix
app.use('',require('./router/routes'));

// //pop up  static login
// app.get('/login', function(request, response) {
//   response.render('login.ejs');
// }); 

//Connect to MongoDB
mongoose.connect(process.env.DB_URI, 
  {
    useNewUrlParser: true,
     useUnifiedTopology: true,
    }
  );
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
}));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});