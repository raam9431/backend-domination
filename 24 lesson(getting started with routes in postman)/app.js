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
  data.push(parseInt(req.params.number));
  res.send(data);
});

app.listen(3000);