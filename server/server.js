// PACKAGES //
var path = require('path');
var fs = require('fs');
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var passport = require('passport');
var cookieParser = require('cookie-parser');
var session = require('express-session');

// IMPORTS //
var indexRoutes = require('./routes/index');

// CREATE APP //
var app = express();
require('./app/config/passport')(passport);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// MIDDLEWARE //
app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect(`mongodb://http://localhost:27017/app`);
mongoose.Promise = global.Promise;

// ROUTES //
app.use('/', indexRoutes);

// ERROR HANDLER //
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
});

module.exports = app;
