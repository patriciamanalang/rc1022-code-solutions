/* exported isVowel */

// create a for loop to check the length of the characters
// if statement to return true if characters are vowels
// return false otherwise
function isVowel(char) {
  for (var i = 0; i < char.length; i++) {
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' || char === 'A' || char === 'E' || char === 'I' || char === 'O' || char === 'U') {
      return true;
    }
  }
  return false;
}
