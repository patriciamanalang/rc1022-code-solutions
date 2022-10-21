/* exported isUpperCased */

// create storage for output
// create a for loop to check for all uppercase words
// create a boolean and return true if all words are uppercase
// create a boolean and return false if words are not uppercase
function isUpperCased(word) {
  var upperCased = '';
  for (var i = 0; i < word.length; i++) {
    upperCased += (word[i].toUpperCase());
    if (word === upperCased) {
      return true;
    }
  }
  return false;
}
