var mongoose = require('mongoose');
var Poll = require('../models/user.js');

exports.createPoll = function (id, namePoll, optionsPoll, callback) {
    var newPoll = new Poll();
    newPoll.polls.name = namePoll;
    newPoll.polls.author = id;
    newPoll.polls.options = optionsPoll;
    for(var i = 0; i < optionsPoll.length; i++) {
        newPoll.votes.push({"name": optionsPoll[i], "count": 0, electorate: []});
    }
    newPoll.save(function (err) {
        if (err) throw err;
        callback(true);
    })
}