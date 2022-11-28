/* exported defaults */
// use a for in loop
// loop over the source object to gain access to its keys
// if the target object at keys = undefined
// create a new key value pair for the target object using the source object's key value pair

function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
