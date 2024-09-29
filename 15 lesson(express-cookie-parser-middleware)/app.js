const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', function (req, res, next) {
  res.send('Hello World');
});

app.get("/check", function(req, res, next){
    console.log(res.cookie.name);
    res.send("checking");    
});

app.get('/banned', function (req, res, next) {
  res.cookie('name', "harsh");
  res.send("banned");
});

app.listen(3000);