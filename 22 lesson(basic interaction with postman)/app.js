const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/', function (req, res) {
//     res.render("index")
// });

app.get('/check', function (req, res) {
    console.log(req.body);
    res.send("working");
});

app.post('/check', function (req, res) {
    console.log(req.body);
    res.send("working");
});

app.put('/check', function (req, res) {
    console.log(req.body);
    res.send("working");
});

app.patch('/check', function (req, res) {
    console.log(req.body);
    res.send("working");
});

app.delete('/check', function (req, res) {
    console.log(req.body);
    res.send("working");
});

app.head('/check', function (req, res) {
    console.log(req.body);
    res.send("working");
});

app.options('/check', function (req, res) {
    console.log(req.body);
    res.send("working");
});






app.listen(3000);