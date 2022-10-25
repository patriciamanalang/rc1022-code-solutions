/* exported capitalize */

// create storage for output
// assign word at zero the uppercase method then return the value to the output
// make a for loop to make sure all words after index zero are lowercase.
function capitalize(word) {
  var updatedWord = '';
  updatedWord += word[0].toUpperCase();
  for (var i = 1; i < word.length; i++) {
    updatedWord += word[i].toLowerCase();
  }
  return updatedWord;
}
