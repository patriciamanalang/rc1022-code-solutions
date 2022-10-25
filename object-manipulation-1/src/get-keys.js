/* exported getKeys */
function getKeys(object) {
  var keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
