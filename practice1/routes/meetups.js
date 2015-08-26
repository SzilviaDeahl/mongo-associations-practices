var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/mongo-associations-lesson');
var meetupsCollection = db.get('meetups')
var locationsCollection = db.get('locations')
var usersCollection = db.get('users')

router.get('/meetups/:id', function (req, res, next) {
  var meetupIds = [];
  meetupsCollection.findOne({_id: req.params.id}, function (err, meetup) {
    locationsCollection.findOne({_id: meetup.locationId}, function (err, location) {
      usersCollection.find({_id: {$in: meetup.memberIds}}, function (err, members) {
        usersCollection.find({meetupIds: {$in: [meetup.meetupId]}}, function (err, followers) {

          collectIds = function (user) {
            for(var i =0; i < user.follows.length; i ++ ) {
              if (req.params.id !== user.follows[i].toString()) {
                meetupIds.push(user.follows[i])
              }
            }
          }

          followers.forEach(collectIds);
          members.forEach(collectIds);

          meetupsCollection.find({_id: {$in: meetupIds}}, function (err, other ) {
            res.render('meetups/show', {
            meetup: meetup,
            location: location,
            user: members,
            followers: followers,
            otherMeetups: other
            });
          });
        });
      });
    });
  });
});

module.exports = router;
