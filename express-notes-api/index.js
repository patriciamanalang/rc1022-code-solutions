const express = require('express');
const app = express();

const data = require('./data.json');
const fs = require('fs');

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000!');
});

app.use(express.json());

// Clients can GET a list of notes
app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const key in data.notes) {
    notesArray.push(data.notes[key]);
  }
  res.status(200).json(notesArray);
});

// Clients can GET a single note by id
app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id < 0 || !Number.isInteger(id)) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (data.notes[id]) {
    res.status(200).json(data.notes[id]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

// Clients can POST a new note
app.post('/api/notes', (req, res) => {
  if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    req.body.id = data.nextId;
    data.notes[data.nextId] = req.body;
    data.nextId++;
    const newJsonNote = JSON.stringify(data, null, 2);
    fs.writeFile('data.json', newJsonNote + '\n', err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(201).json(req.body);
      }
    });
  }
});

// Clients can DELETE a note by id
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id > 0 && Number.isInteger(id)) {
    if (data.notes[id]) {
      delete data.notes[id];
      const newJsonNote = JSON.stringify(data, null, 2);
      fs.writeFile('data.json', newJsonNote + '\n', err => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'An unexpected error occured.' });
        } else {
          res.status(204);
        }
      });
    } else if (!data.notes[id]) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    }
  } else {
    res.status(400).json({ error: 'id must be a positive integer.' });
  }
});

// Clients can replace a note (PUT) by id
app.put('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (id <= 0 || !Number.isInteger(id)) {
    res.status(400).json({ error: 'id must be a positive integer.' });
  } else if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    if (data.notes[id]) {
      data.notes[id].content = req.body.content;
      const newJsonNote = JSON.stringify(data, null, 2);
      fs.writeFile('data.json', newJsonNote + '\n', err => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'An unexpected error ocurred.' });
        } else {
          res.status(200).json(data.notes[id]);
        }
      });
    } else if (!data.notes[id]) {
      res.status(404).json({ error: `cannot find note with id ${id}` });
    }
  }
}
);
