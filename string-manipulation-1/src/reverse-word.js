/* exported reverseWord */
function reverseWord(word) {
  var reverseWord = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseWord += word[i];
  }
  return reverseWord;
}
