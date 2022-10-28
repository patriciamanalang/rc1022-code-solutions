/* exported capitalizeWord */
function capitalizeWord(word) {
  var lowercased = word.toLowerCase();
  if (lowercased === 'javascript') {
    return 'JavaScript';
  } else {
    return lowercased[0].toUpperCase() + lowercased.slice(1, word.length);
  }
}
