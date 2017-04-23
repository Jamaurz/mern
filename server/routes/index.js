var path = require('path');
var passport = require('passport');
var app = require('express').Router();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.get('/logout', function (req, res) {
			req.logout();
			res.redirect('/');
		});

app.get('/auth/twitter', passport.authenticate('twitter'));

// handle the callback after twitter has authenticated the user
app.get('/auth/twitter/callback',
    passport.authenticate('twitter', {
        successRedirect : '/',
        failureRedirect : '/'
    }));
        

module.exports = app;
