/* exported findIndex */
function findIndex(array, value) {
  var index = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      index = i;
      return index;
    }
  }
  return index;
}
