var off = true;
var body = document.querySelector('body');
var bulb = document.querySelector('.bulb');

function lightSwitch(event) {
  off = !off;
  if (off === true) {
    bulb.className = 'bulb off';
    body.className = 'light-off';
  } else {
    bulb.className = 'bulb on';
    body.className = 'light-on';
  }
}
bulb.addEventListener('click', lightSwitch);
