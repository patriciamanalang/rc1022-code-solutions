/* exported compact */
// create a storage for output
// create a for loop to go through entire array
// create an if statement to find truthy values
// add truthy values on the storage you created

function compact(array) {
  var truthyValues = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      truthyValues.push(array[i]);
    }
  }
  return truthyValues;
}
