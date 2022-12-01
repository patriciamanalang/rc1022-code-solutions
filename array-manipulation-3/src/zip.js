/* exported zip */
// create an empty array
// check to see if the length of the first array is longer than the length of the second array
// if the condition above is true,
// create a new empty array
// push the first array at i and second array at i into the new empty array
// then push that new empty array to the initial empty array created
// return new array

function zip(first, second) {
  var zipArray = [];
  for (var i = 0; i < second.length && i < first.length; i++) {
    var subArray = [];
    subArray.push(first[i], second[i]);
    zipArray.push(subArray);
  }
  return zipArray;
}
