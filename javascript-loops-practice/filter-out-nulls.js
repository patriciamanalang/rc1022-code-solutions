/* exported filterOutNulls */
function filterOutNulls(values) {
  var notNull = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      notNull.push(values[i]);
    }
  }
  return notNull;
}
