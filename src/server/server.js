const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const db = require('./db');

app.get('/', (req, res) => {
  // res.send('server response success')
  db.query('select * from todo', (err, data) => {
    if (!err) res.send({ prodcuts: data });
    else res.send(err);
  });
});

app.listen(PORT, () => {
  console.log(`server run : http://localhost:${PORT}/`);
});
