const express = require('express');
const app = express();
const expressSessioin = require('express-session');

app.use(expressSessioin({
    secret: "random stuff",
    resave: false,
    saveUninitialized: false,
}));

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/create', function (req, res) {
    req.session.polo = true;
    res.send('done');
});

app.get('/checks', function (req, res) {
    console.log(req.session.polo);
});

app.listen(3000);