/* exported pick */

// create new empty object
// look through all keys in object using for in loop
// look through each item in keys(array)
// look through each key in source(object)
// if key in array at i is equal to key (in object) && you also need to check if the value of key is undefined
// set result property with square bracket notation for key[i]
// set value of property to value of key at source
// return result

function pick(source, keys) {
  var result = {};
  for (var i = 0; i < keys.length; i++) {
    for (var key in source) {
      if (keys[i] === key && source[key] !== undefined) {
        result[keys[i]] = source[key];
      }
    }
  }
  return result;
}
