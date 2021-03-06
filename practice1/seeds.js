var db = require('monk')('localhost/mongo-associations-lesson')

var meetups = db.get('meetups')
var locations = db.get('locations')
var users = db.get('users')

var galvanizeId = locations.id(),
    pivotalId = locations.id(),
    googleId = locations.id()

var nodeId = meetups.id(),
    rubyId = meetups.id(),
    phpId = meetups.id(),
    pythonId = meetups.id()

var joeId = users.id(),
    sueId = users.id(),
    timId = users.id(),
    kimId = users.id()

Promise.all([
  users.remove().then(function () {
    return Promise.all([
      users.insert({_id: joeId, name: 'Joe', follows: [pythonId, phpId]}),
      users.insert({_id: sueId, name: 'Sue', follows: [pythonId]}),
      users.insert({_id: timId, name: 'Tim', follows: [rubyId, nodeId]}),
      users.insert({_id: kimId, name: 'Kim', follows: [pythonId]}),
    ])
  }),

  locations.remove().then(function () {
    return Promise.all([
      locations.insert({_id: galvanizeId, name: 'Galvanize', address: 'Platte St, Denver'}),
      locations.insert({_id: pivotalId, name: 'Pivotal Labs', address: '17th St, Boulder'}),
      locations.insert({_id: googleId, name: 'Google', address: 'Pearl St, Boulder'}),
    ])
  }),

  meetups.remove({}).then(function () {
    return Promise.all([
      meetups.insert({
        _id: nodeId,
        name: 'NodeJS',
        description: 'Learn all the scripts!',
        locationId: galvanizeId,
        memberIds: [joeId, kimId],
      }),
      meetups.insert({
        _id: rubyId,
        name: 'Ruby',
        description: 'What a gem!',
        locationId: galvanizeId,
        memberIds: [timId, kimId],
      }),
      meetups.insert({
        _id: phpId,
        name: 'PHP',
        description: 'And oldy but a goodie!',
        locationId: googleId,
        memberIds: [sueId, joeId, kimId],
      }),
      meetups.insert({
        _id: pythonId,
        name: 'Python',
        description: 'Get your data on!',
        locationId: googleId,
        memberIds: [],
      }),
    ])
  }),
]).then(function () {
  db.close()
})
