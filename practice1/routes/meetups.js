var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/mongo-associations-lesson');
var meetupsCollection = db.get('meetups')
var locationsCollection = db.get('locations')
var usersCollection = db.get('users')



module.exports = router;
