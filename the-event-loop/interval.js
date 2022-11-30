let count = 3;

const intervalID = setInterval(function () {
  if (count > 0) {
    console.log(count);
  } else if (count === 0) {
    clearInterval(intervalID);
    console.log('Blast off!');
  }
  count--;
}, 1000);
