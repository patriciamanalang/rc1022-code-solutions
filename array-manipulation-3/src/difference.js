/* exported difference */
// create an empty array assign it to a newArray variable
// create a for loop to check if the indexes for first array is not present in the second then push it to newArray
// create a foor loop to cehck if the indexes for second array is not present int he first then push it into the array
// return: a new array with values that is not overlapping from first and second array

function difference(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) === -1) {
      newArray.push(first[i]);
    }
  }
  for (var a = 0; a < second.length; a++) {
    if (first.indexOf(second[a]) === -1) {
      newArray.push(second[a]);
    }
  }
  return newArray;
}
