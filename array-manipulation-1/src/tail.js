/* exported tail */

// create a storage for your new array
// create a for loop for the entire array in which initialization is at 1 instead of zero
// add array at i to the storage you created
// return storage variable outside the for loop code block

function tail(array) {
  var tailArray = [];
  for (var i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  return tailArray;
}
