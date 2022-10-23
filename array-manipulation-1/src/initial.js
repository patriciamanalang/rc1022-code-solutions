/* exported initial */

// create a storage for the new array
// create a for loop subtracting 1 from the entire array (condition)
// add array at index i to the new array storage
// outside the for loop code block, return the storage variable for your new array
function initial(array) {
  var initial = [];
  for (var i = 0; i < array.length - 1; i++) {

    initial.push(array[i]);
  }
  return initial;
}
