/* exported isLowerCased */

// create storage for output
// create a for loop to check for all lowercase words
// create a boolean and return true if all words are lowercase
// create a boolean and return false if words are not lowercase
function isLowerCased(word) {
  var lowerCased = '';
  for (var i = 0; i < word.length; i++) {
    lowerCased += (word[i].toLowerCase());
    if (word === lowerCased) {
      return true;
    }
  }
  return false;
}
