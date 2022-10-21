/* exported getWords */

// create if statement to check the string
// return each word from the original string as individual strings in an array
// if string is empty, return empty array
function getWords(string) {

  if (string !== '') {
    return string.split(' ');
  } else {
    return [];
  }
}
