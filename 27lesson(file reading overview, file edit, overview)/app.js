const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { log } = require('console');

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    fs.readdir(`./files`, function (err, files) {
        res.render("index", { files });
        console.log(files);
    });
});

app.get('/edit/:filename', function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, data) {
        if (err) return res.send(err);
        res.render("edit", { data, filename: req.params.filename });
        
    });
});

app.post('/update/:filename', function (req, res) {
    fs.writeFile(`./files/${req.params.filename}`, req.body.filedata, function (err) {
        if (err) return res.send(err);
        res.redirect("/");
    });
});

app.get('/delete/:filename', function (req, res) {
    fs.unlink(`./files/${req.params.filename}`, function (err) {
        if (err) return res.send(err);
        res.redirect("/");
        console.log(req.params.filename);
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

