/* exported includes */
// Declare a function
// Loop through the array
// If an item in the array matches value, return true
// otherwise return false
// Stop loop at the end of the array

function includes(array, value) {
  var i = 0;
  while (i < array.length) {
    if (array[i] === value) return true;
    i++;
  }
  return false;
}
