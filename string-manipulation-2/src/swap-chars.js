/* exported swapChars */

// loop over the characters
// slice each character
// create an empty array to push each character
// if the index value is the firstIndex, save it in a variable
// push a space character as placeholder
// if the index value is the secondIndex, save it in a variable
// push a space character as placeholder
// if the index value is not the firstIndex or the secondIndex push the character at the index
// reassign the value of character at second index of array to the firstChar variable
// reassign the value of character at first index of array to the secondChar variable
// join the return

function swapChars(firstIndex, secondIndex, string) {
  var firstChar = string[firstIndex];
  var secondChar = string[secondIndex];
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      newString += secondChar;
    } else if (i === secondIndex) {
      newString += firstChar;
    } else {
      newString += string.slice(i, i + 1);
    }
  }
  return newString;
}
