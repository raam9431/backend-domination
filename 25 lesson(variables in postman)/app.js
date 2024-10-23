const express = require('express');
const app = express();

app.get('/api/testing/devlopment', function (req, res) {
  res.send('Hello World');
});

app.get('/api/testing/devlopment/user', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);