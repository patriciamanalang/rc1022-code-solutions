/* exported ransomCase */
// Declare a function
// Declare a variable to hold the new word
// Set up a counter variable
// Go through the string using a for loop
// Lower case the the letters at even indexes
// use an if statement to see if there are still letters left
// upper case the letters at odd indexes
// stop the loop once you reach the end of the string
// Return new variable from the function

function ransomCase(string) {
  var ransomWord = '';

  var i = 0;
  while (i < string.length) {
    ransomWord += string[i].toLowerCase();
    i++;
    if (i < string.length) {
      ransomWord += string[i].toUpperCase();
      i++;
    }
  }
  return ransomWord;
}
