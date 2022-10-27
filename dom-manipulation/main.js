
var hotButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');
var clicks = 0;
function clickNum() {
  clicks++;
  clickCount.textContent = 'Clicks: ' + clicks;
  if (clicks < 4) {
    hotButton.className = 'hot-button cold';
  } else if (clicks < 7) {
    hotButton.className = 'hot-button cool';
  } else if (clicks < 10) {
    hotButton.className = 'hot-button tepid';
  } else if (clicks < 13) {
    hotButton.className = 'hot-button warm';
  } else if (clicks < 16) {
    hotButton.className = 'hot-button hot';
  } else {
    hotButton.className = 'hot-button nuclear';
  }

}
hotButton.addEventListener('click', clickNum);
