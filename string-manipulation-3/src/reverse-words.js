/* exported reverseWords */
// create a function
// Split the string at spaces
// put results in an array with the words of the original string
// Start with the first item in the array
// create a new word by reversing the letters of that item and push it to a new array.
// Do that for each item in the array
// When your'e done, concatenate the words in the array into the string with a space.
// If it's the last word, concatenate it without a space.

function reverseWords(string) {
  var wordList = string.split(' ');
  var reverseWord = '';
  var reverseWordList = [];
  var reverseString = '';

  for (var i = 0; i < wordList.length; i++) {
    var word = wordList[i];
    for (var k = word.length - 1; k >= 0; k--) {
      reverseWord += word[k];
    }
    reverseWordList.push(reverseWord);
    reverseWord = '';
  }
  reverseString = reverseWordList.join(' ');
  return reverseString;
}
