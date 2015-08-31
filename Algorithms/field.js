function Coordinates (x, y, type) {
  this.x = x;
  this.y = y;
  this.type = type;
}

function findDistance(node1, node2) {
// two possible solutions:
  // return Math.sqrt(Math.pow((node2.x - node1.x), 2) + Math.pow((node2.y - node1.y), 2))
  return Math.hypot(node2.x - node1.x, node2.y - node1.y)
}

var player1 = new Coordinates(22, 11, 'player1');
var player0 = new Coordinates(44, 3, 'player0');
var player4 = new Coordinates(6, 5, 'player4');
var player2 = new Coordinates(8, 77, 'player2');
var player3 = new Coordinates(10, 9, 'player3');

var flag = new Coordinates(0, 0, 'flag');

var something = [];
something.push(player0);
something.push(player1);
something.push(player2);
something.push(player3);
something.push(player4);

var closest_player = player0;
var closest_player_distance = findDistance(closest_player, flag);

for (var i = 1; i < something.length; i++) {
  new_dist = findDistance(something[i],flag);
  if (new_dist < closest_player_distance ) {
    closest_player  = something[i];
    closest_player_distance = new_dist;
  }
}

// Math.min.apply(Math, [player0.distance,player1.distance,]);

console.log("closest player is "+ closest_player.type);
