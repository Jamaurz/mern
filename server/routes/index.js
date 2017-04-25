var path = require('path');
var passport = require('passport');
var app = require('express').Router();
var db = require('../utils/DataBaseUtils');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.get('/getevent', function(req, res) {
    db.getEvent(function(data) {
        res.send(data);
    });
});

app.post('/add', function (req, res) {
    if(req.user) {
        db.add(req.body.event, req.user.twitter.id, function(data) {
            res.send(data);  
        });
    } else {
        res.send(false);
    }
});

app.get('/info', function (req, res) {
    if(req.user){
        res.send(req.user.twitter.displayName);    
    } else {
        req.send(false);   
    }
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
