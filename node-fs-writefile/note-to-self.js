const fs = require('fs');

fs.writeFile('note.txt', process.argv[2] + '\n', err => {
  if (err) throw err;
  // console.log('The file has been saved!');
});
