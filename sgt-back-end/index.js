const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000!');
});

app.use(express.json());

// GET
app.get('/api/grades', (req, res, next) => {

  const sql = `
      select *
        from "grades"
    `;

  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

// POST
app.post('/api/grades/', (req, res) => {
  const newGrade = req.body;
  const score = Number(newGrade.score);
  if (!('name' in newGrade) || !('course' in newGrade) || !('score' in newGrade)) {
    res.status(400).json({ error: 'name, course, and score are required fields' });
  } else if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({ error: 'score must be an integer between 0 and 100' });
  } else {
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;
    const param = [newGrade.name, newGrade.course, newGrade.score];
    db.query(sql, param)
      .then(result => {
        const grade = result.rows[0];
        res.status(201).json(grade);
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      });
  }
});

// PUT
app.put('/api/grades/:gradeId', (req, res) => {
  const gradeId = req.params.gradeId;
  const newName = req.body.name;
  const newCourse = req.body.course;
  const newScore = Number(req.body.score);
  if (!newName || !newCourse || !newScore || !Number.isInteger(newScore) || newScore < 0 || newScore > 100) {
    res.status(400).json({ Error: 'A valid Name, Course, and Score are required. Score must only be an integer between 0 - 100.' });
  } else {
    const sqlText = `
        update "grades"
           set "name"    = $1,
               "course"  = $2,
               "score"   = $3
         where "gradeId" = $4
         returning *
        `;
    const sqlValues = [newName, newCourse, newScore, gradeId];
    db.query(sqlText, sqlValues)
      .then(result => {
        const updatedGrade = result.rows[0];
        if (updatedGrade === undefined) {
          res.status(404).json({ error: `The gradeId ${gradeId} does not exist` });
        } else {
          res.status(200).json(updatedGrade);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      });
  }
});

// DELETE
app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId < 0 || typeof gradeId === 'string') {
    res.status(400).json({ Error: 'Invalid gradeId. GradeId must be a postivive integer.' });
  } else {
    const sqlText = `
      delete
        from "grades"
      where "gradeId" = $1
      returning *
      `;
    const sqlValues = [gradeId];
    db.query(sqlText, sqlValues)
      .then(result => {
        const deletedGrade = result.rows[0];
        if (deletedGrade === undefined) {
          res.status(404).json({ error: `The gradeId ${gradeId} does not exist` });
        } else {
          res.sendStatus(204);
        }
      })
      .catch(err => {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occured.' });
      });
  }
});
