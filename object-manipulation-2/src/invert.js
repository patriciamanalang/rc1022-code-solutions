/* exported invert */
// create new object
// utilize for in loop to loop over the source object's key
// reassign the new object's key as the source object's value
// reassign the new object's value as source object's key

function invert(source) {
  var newObj = {};
  for (var key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
