/* exported numVowels */

// create a variable for the number of vowels
// create a variable to make string all lowercase
// create a for loop to go through the string
// create an if statement to check for vowels in the string
// if yes, increament vowel counter
// return number of vowels
function numVowels(string) {
  var vowels = 0;
  var stringLowerCased = string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    if (stringLowerCased[i] === 'a' || stringLowerCased[i] === 'e' || stringLowerCased[i] === 'i' || stringLowerCased[i] === 'o' || stringLowerCased[i] === 'u') {
      vowels++;
    }
  }
  return vowels;
}
