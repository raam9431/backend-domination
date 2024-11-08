const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const { log } = require('console');
const { isUtf8 } = require('buffer');

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    fs.readdir(`./hisaab`, function (err, files) {
        if(err) return res.status(500).send(err);

        res.render("index", {files: files})
        console.log(err, files);
    });
})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
