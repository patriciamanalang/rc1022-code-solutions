/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixAdded = [];
  for (var i = 0; i < words.length; i++) {
    suffixAdded.push(words[i] + suffix);
  }
  return suffixAdded;
}
