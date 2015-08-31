var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/mongo-associations-lesson')
var meetupsCollection = db.get('meetups');
var locationsCollection = db.get('locations');
var usersCollection = db.get('users');

res.render('/meetups/:id', function (req, res, next) {
  meetupsCollection.findOne({_id: req.params.id}, function (err, meetup) {
    locationsCollection.findOne({_id: meetup.locationId}, function (err, location) {
      usersCollection.find({_id: {$in:meetup.memberIds}}, function (err, members) {
        res.render('meetups', {meetup: meetup, location: location, user: members})
      });
    });
  });
});

module.exports = router;
