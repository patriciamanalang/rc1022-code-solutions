/* exported filterOutStrings */
function filterOutStrings(values) {
  var notString = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      notString.push(values[i]);
    }
  }
  return notString;
}
