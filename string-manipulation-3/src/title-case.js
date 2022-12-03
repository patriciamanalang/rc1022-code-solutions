/* exported titleCase */
// Create a variable that stores the argument string to lowercased and split at each space
// create a var that holds an empty string
// make an array with words that shouldnt be capitilized
// loop through the array of the string split
// at each iteration of the loop check each letter of the word to see if it includes : or -
// if it does then check if the word is JavaScript, if it is then return JavaScript into the title
// if it has a dash then separate the string at the - and capitilized then combine them with - in the middle and return it to the title
// if the string is the first word of the title then always capitilize it
// if its not then check to see if the word is one of the words that is notallowed if it is one then lowercase it
// check to see if the string is either api or javascript and capitilize it
// else just capitilize the first character of each string and return it to the string title

function titleCase(string) {
  var splitString = string.toLowerCase().split(' ');
  var title = '';
  var notAllowed = ['in', 'for', 'of', 'the', 'on', 'and', 'to'];
  for (var i = 0; i < splitString.length; i++) {
    for (var x = 0; x < splitString[i].length; x++) {
      var char = splitString[i].charAt(x);
      if (char === ':' || char === '-') {
        if (splitString[i] === 'javascript:') {
          title += 'JavaScript: ';
          i++;
          title += splitString[i].charAt(0).toUpperCase() + splitString[i].substr(1) + ' ';
          i++;
          x = 0;
        } else if (char === '-') {
          var dashSplit = splitString[i].split('-');
          for (var y = 0; y < dashSplit.length; y++) {
            if (dashSplit[y - 1]) {
              title += dashSplit[y].charAt(0).toUpperCase() + dashSplit[y].substr(1) + ' ';
            } else {
              title += dashSplit[y].charAt(0).toUpperCase() + dashSplit[y].substr(1) + '-';
            }
          }
          x = 0;
          y = 0;
          i++;
        } else if (char === ':') {
          title += splitString[i].charAt(0).toUpperCase() + splitString[i].substr(1) + ' ';
          i++;
          title += splitString[i].charAt(0).toUpperCase() + splitString[i].substr(1) + ' ';
          i++;
          x = 0;
        }
      }
    }
    if (i === 0 && splitString[i] === splitString[0]) {
      title += splitString[i].charAt(0).toUpperCase() + splitString[i].substr(1) + ' ';
      continue;
    }
    for (x = 0; x < notAllowed.length; x++) {
      if (splitString[i] === notAllowed[x]) {
        title += splitString[i] + ' ';
        i++;
      }
    }
    if (splitString[i] === 'javascript') {
      title += 'JavaScript ';
    } else if (splitString[i] === 'api') {
      title += 'API ';
    } else {
      title += splitString[i].charAt(0).toUpperCase() + splitString[i].substr(1) + ' ';
    }
  }
  return title.trim();
}
