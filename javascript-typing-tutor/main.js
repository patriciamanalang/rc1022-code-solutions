// Query DOM for ALL span elements
// Set up a variable for the index number
// Start the first span element in the default stat

// Declare a function
// if the user's input matches the letter:
// change formatting to correct
// then move on to the next letter and change styling to default

// else, change styling to wrong, they can't move on until they type the correct letter

var $span = document.querySelectorAll('span');
var i = 0;
$span[i].className = 'default';
function typingTutor(event) {
  if (event.key === $span[i].textContent) {
    $span[i].className = 'correct';
    i++;
    $span[i].className = 'default';
  } else {
    $span[i].className = 'wrong';
  }
}
document.addEventListener('keydown', typingTutor);
