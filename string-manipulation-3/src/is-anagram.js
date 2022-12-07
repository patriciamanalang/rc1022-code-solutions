/* exported isAnagram */
// replace all spaces in both strings to empty strings
// if stringOne and stringTwo are not the same length, return false
// if they are the same length, push each letter of the string intp an array
// if a letter in arrayOne is found inside of arrayTwo, delete that letter from array two at that index
// break to leave the for loop once a letter has been found
// if the length of arrayTwo is 0, return true, if not, return false

function isAnagram(firstString, secondString) {
  var stringOne = firstString.replaceAll(' ', '');
  var stringTwo = secondString.replaceAll(' ', '');
  var arrayOne = [];
  var arrayTwo = [];
  if (stringOne.length !== stringTwo.length) {
    return false;
  } else {
    for (var i = 0; i < stringOne.length; i++) {
      arrayOne.push(stringOne[i]);
      arrayTwo.push(stringTwo[i]);
    }
  }
  for (var k = 0; k < arrayOne.length; k++) {
    for (var f = 0; f < arrayTwo.length; f++) {
      if (arrayOne[k] === arrayTwo[f]) {
        arrayTwo.splice(f, 1);
        break;
      }
    }
  }
  if (arrayTwo.length === 0) {
    return true;
  } else {
    return false;
  }
}
