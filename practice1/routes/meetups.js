var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/mongo-associations-lesson');
var meetupsCollection = db.get('meetups')
var locationsCollection = db.get('locations')
var usersCollection = db.get('users')

router.get('/meetups/:id', function (req, res, next) {
  meetupsCollection.findOne({_id: req.params.id}, function (err, meetup) {
    res.render('meetups/show', {meetup: meetup})
  });
});

module.exports = router;
