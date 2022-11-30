const fs = require('fs');

const randomNumber = Math.random();

fs.writeFile('random.txt', randomNumber + '\n', err => {
  if (err) throw err;
  // console.log('The file has been saved!');
});
