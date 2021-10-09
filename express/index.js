const express = require('express');
const { A } = require('./A.js');

const app = express();
const a = new A('init first');

app.get('/', (req, res) => {
  res.send({ this: 'this' });
});

app.get('/a', (req, res) => {
  a.a();
  res.send({ a: 'a' });
});

app.get('/b', (req, res) => {
  a.change();
  res.send({ b: 'b' });
});

app.listen(3000);
