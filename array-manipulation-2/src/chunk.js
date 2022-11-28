/* exported chunk */
// create an empty array
// loop over the array
// increment the i by the size
// slice the array at the current index up to the index + size
// push the returned array into the final array
// return the final array

function chunk(array, size) {
  var finalArray = [];
  for (var i = 0; i < array.length; i += size) {
    finalArray.push(array.slice(i, size + i));
  }
  return finalArray;
}
