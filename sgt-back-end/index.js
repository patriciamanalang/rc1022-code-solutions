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
// app.put('/api/grades/:gradeId', (req, res) => {
//   const id = Number(req.params.gradeId);
//   const updateGrade = req.body;
//   const score = Number(updateGrade.score);
//   if (!Number.isInteger(id) || id <= 0) {
//     res.status(400).json({ error: 'gradeId must be a positive integer' });
//   } else if (!('name' in updateGrade) || !('course' in updateGrade) || !('score' in updateGrade)) {
//     res.status(400).json({ error: 'name, course, and score are required fields' });
//   } else if (!Number.isInteger(score) || score < 0 || score > 100) {
//     res.status(400).json({ error: 'score must be an integer between 0 and 100' });
//   } else {
//     const sql = `
//       update "grades"
//          set "name" = $1,
//              "course" = $2,
//              "score" = $3
//        where "gradeId" = $4
//     returning *;
//   `;
//     const param = [updateGrade.name, updateGrade.course, updateGrade.score, id];
//     db.query(sql, param)
//       .then(result => {
//         const grade = result.rows[0];
//         if (!grade) {
//           res.status(404).json({ error: `Cannot find grade with gradeId ${id}` });
//         } else {
//           res.status(200).json(grade);
//         }
//       })
//       .catch(err => {
//         console.error(err);
//         res.status(500).json({ error: 'An unexpected error occured.' });
//       });
//   }
// });
