/* exported equal */
// Create an if statement checking to see if the lengths of the arrays don't match, return false
// Use a for loop to compare the two arrays at the same index. If the values at that index are the same, move on to the next one.
// If at some point they're not the same, return false
// otherwise, return true

function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  for (var i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
}
