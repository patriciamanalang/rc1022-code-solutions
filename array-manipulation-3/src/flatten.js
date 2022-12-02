/* exported flatten */
// create a new variable for new flattened array
// create a for loop that goes through the entire array
// check to see if the current index of the array, is an array
// if false - push array at i into new flattened array
// if true - create a new for loop and loop through that array and push each value into that array
// return new flattened array

function flatten(array) {
  var flattenedArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      flattenedArray.push(array[i]);
    } else if (Array.isArray(array[i]) === true) {
      for (var x = 0; x < array[i].length; x++) {
        var insideArray = array[i];
        flattenedArray.push(insideArray[x]);
      }
    }
  }
  return flattenedArray;
}
