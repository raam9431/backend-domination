const express = require('express');
const app = express();

app.use(function (req, res, next) {
    console.log("hey hello middleware");
    next();
});

app.use(function (req, res, next) {
    console.log("hey hello middleware2 kaise ho");
    next();
});

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.get('/about', function (req, res) {
    res.send('something about about Page');
});

app.get('*', function (req, res) {
    res.send('if nothing works, I will');
});

app.listen(3000);