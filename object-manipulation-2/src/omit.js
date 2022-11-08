/* exported omit */
// create a new object
// loop over the keys in source object using a for in loop
// assign the keys and value of the source object to the new object
// at every iteration of the for in loop:
// loop over all the keys in the keys ARRAY
// check if the current key of the source object matches any keys in the ARRAY
// if it matches, delete the current key of the new object

function omit(source, keys) {
  var newObject = {};
  for (var key in source) {
    newObject[key] = source[key];
    for (var i = 0; i < keys.length; i++) {
      if (key === keys[i]) {
        delete newObject[key];
      }
    }
  }
  return newObject;
}
