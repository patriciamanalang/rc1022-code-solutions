function countdownMessage() {
  var $countdownDisplay = document.querySelector('.countdown-display');
  var i = $countdownDisplay.textContent;
  i--;
  $countdownDisplay.textContent = i;
  if (i === 0) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  }
}
var intervalId = setInterval(countdownMessage, 1000);
