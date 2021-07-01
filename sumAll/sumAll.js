const sumAll = function(x, y) {
  let sum = 0;
  if( x<0 || y<0 ||
     typeof x != 'number'|| typeof y != 'number' ) return 'ERROR';
  let aux = x;
  if(x > y) {
    x = y;
    y = aux;
  }
  for(let i=x; i<=y; i++) {
    sum +=i;
  }
  return sum;
};

module.exports = sumAll;
