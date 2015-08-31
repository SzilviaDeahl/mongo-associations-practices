repeat(5);

function repeat (incoming) {
  if (incoming == 0) {
    console.log('Base case reached');
  } else {
    repeat(incoming - 1);
    console.log('I am at ' + incoming);
  }
};

thing = repeat(5);
console.log(thing);

function repeat(num) {
  if (num === 1){
    return 1;
  }else {
    return num + repeat(num-1)
  }
};
