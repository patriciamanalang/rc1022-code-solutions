/* exported capitalizeWord */

// store word(string) in a variable and make it all lowercase
// if the word is javascript
// return JavaScript
// else return word at index 0 capitalized
function capitalizeWord(word) {
  var lowercased = word.toLowerCase();
  if (lowercased === 'javascript') {
    return 'JavaScript';
  } else {
    return lowercased[0].toUpperCase() + lowercased.slice(1, word.length);
  }
}
