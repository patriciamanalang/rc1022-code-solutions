/* exported reverse */

// create a storage for your new array
// create a for loop with the initialization statrting from the last element to the first by decrementing
// add items at array[i] to your new array storage
// return new variable outside your for loop code block
function reverse(array) {
  var reversed = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}
