/* exported union */
// create an empty array
// loop through the first array and if the empty array does not include first array at i then push that value into the array
// loop through the second array and if the empty array does not include second array at i then push that value into the array
// return the array

function union(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!newArray.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  for (i = 0; i < second.length; i++) {
    if (!newArray.includes(second[i])) {
      newArray.push(second[i]);
    }
  }
  return newArray;
}
