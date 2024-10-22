const express = require('express');
const app = express();

var data = [1,2,3,4,5];

app.get('/', function (req, res) {
  res.send('Hello  World');
});

app.get('/data', function (req, res) {
  res.send(data);
});

app.post('/data/:number', function (req, res) {
  res.send(data);
  parseInt(req.params.number);
});

app.listen(3000);