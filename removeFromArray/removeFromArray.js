const removeFromArray = function(arr) {
  let items = Array.prototype.slice.call(arguments, 1);
  let outputArray = [];
  let shouldBeRemoved = false;
  for(let i=0; i< arr.length; i++) {
    for(let j=0; j<items.length; j++){
      if(arr[i] === items[j]) {
        shouldBeRemoved = true;
        break;
      } else {
        shouldBeRemoved = false;
      }
    } // end for
    // console.log('is shouldBeRemoved?',arr[i], shouldBeRemoved);
    if( !shouldBeRemoved) {
      outputArray.push(arr[i]);
    }
  }// end for
  // console.log({items});
  // console.log({outputArray});
  return outputArray;
};

module.exports = removeFromArray;
