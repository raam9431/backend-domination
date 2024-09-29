const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/shareable', cors(), function (req, res) {
  res.send('Course');
});

app.listen(3000);



