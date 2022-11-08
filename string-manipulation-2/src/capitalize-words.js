/* exported capitalizeWords */

// all letters should start lowercased
// each word should be split individually
// store array into variable
// at index 0, capitalize first letter and add with the rest of the word using substring(1)
// join the array of words back to string
// return string

function capitalizeWords(string) {
  var updatedWords = string.toLowerCase().split(' ');
  for (var i = 0; i < updatedWords.length; i++) {
    updatedWords[i] = updatedWords[i][0].toUpperCase() + updatedWords[i].substring(1);
  }
  return updatedWords.join(' ');
}
