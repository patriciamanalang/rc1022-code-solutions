/* exported toObject */

// create storage for output
// use bracket notation to assign keyvaluepair at zero to equal to keyvaluepair at one
// return variable for output
function toObject(keyValuePair) {
  var object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
