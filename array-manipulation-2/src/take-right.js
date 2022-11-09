/* exported takeRight */

// create a new array
// loop over the array
// before the loop, check if count is greater than the length of the array
// if true. return shallow copy of the entire array
// if false, start loop
// start at the end of the array
// determine the range by subtracting the highest value with the lowest value
// push every new item before the previous item
// return new array

function takeRight(array, count) {
  var newArray = [];
  if (count > array.length - 1) {
    return array.slice(0, count);
  }
  for (var i = array.length - 1; i >= array.length - count; i--) {
    newArray.unshift(array[i]);
  }
  return newArray;
}
