const http = require('http');

var server = http.createServer(function (req, res) { 
    res.end("chala rahe hai server apna");
});

server.listen(3000);