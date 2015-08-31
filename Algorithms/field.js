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

var player1 = new Coordinates(2, 1, 'player2');
var player2 = new Coordinates(4, 3, 'player1');
var player3 = new Coordinates(6, 5, 'player4');
var player4 = new Coordinates(8, 7, 'player3');
var player5 = new Coordinates(10, 9, 'player5');

var flag = new Coordinates(0, 0, 'flag');

var something = [];
something.push(findDistance(player1, flag));
something.push(findDistance(player2, flag));
something.push(findDistance(player3, flag));
something.push(findDistance(player4, flag));
something.push(findDistance(player5, flag));

console.log(something);
