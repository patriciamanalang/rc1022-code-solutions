const express = require('express');
const app = express();
const path = require('path');

const joinedPath = path.join(__dirname, 'public');
const filesServer = express.static(joinedPath);

app.use(filesServer);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
