/* exported intersection */
// create a new empty array
// loop throught the first array length
// if the second array includes the first array at i then push that value into the empty array
// return the created array
function intersection(first, second) {
  var newArray = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i])) {
      newArray.push(first[i]);
    }
  }
  return newArray;
}
