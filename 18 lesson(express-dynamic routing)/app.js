const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('something about main page');
})

app.get('/about', function (req, res) {
  res.send('something about about page');
})

app.get('/author/:username/:age', function (req, res) {
  res.send(`something about ${req.params.username} page who is of ${req.params.age}`);
})

// app.get('/profile/:username', function (req, res) {
//     res.send('somthing about ' + req.params.username + 's page');
// })

app.listen(3000);