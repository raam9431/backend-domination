const express = require('express');
const app = express();


app.get('/', function (req, res, next) {
    try {

        res.send('Hello World');
    }
    catch(err){
        next(err);
    }
});

app.get('/hey', function (req, res, next) {
    try{
        res.send('hey');
    }
    catch(err){
        next(err)
    }
});



// err handler
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
});

app.listen(3000);