/* exported isPalindromic */

// remove spaces
// loop through half of the string
// check each position between the first (going forward) and last (going backward) character

function isPalindromic(string) {
  string = string.replaceAll(' ', '');
  for (let i = 0; i < string.length / 2; i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      return false;
    }
  }
  return true;
}
