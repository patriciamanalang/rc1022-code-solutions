/* exported unique */
// create storage for new empty array
// if length of the array is 0, return the empty array
// If the array isn't empty, push the first item into a new array (first item will
// always be unique)
// Start with the second item in the inputted array. If there are no matches in the.
// new array, push the item from the inputted array into the new array.
// Stop once you go through all the items in the inputted array.
// Return the new array

function unique(array) {
  var newArray = [];
  if (array.length === 0) {
    return newArray;
  }
  newArray.push(array[0]);
  for (var i = 1; i < array.length; i++) {
    var match = false;
    for (var x = 0; x < newArray.length; x++) {
      if (array[i] === newArray[x]) {
        match = true;
        break;
      }
    }
    if (match === false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
