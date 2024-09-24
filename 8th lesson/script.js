// const fs = require('node:fs');

// fs.writeFile("some.txt", "hey hello", function (err) {
//     if (err) console.log(err);
//     else console.log("file created");
// })

// const fs = require('fs');

// fs.readFile("abcd.txt", "utf8", function (err, data) {
//     if(err) console.log(err);
//     else console.log(data);
// })

const fs = require('fs');

fs.appendFile("abcd.txt", " appended data", function (err) { 
    if(err) console.log(err);
    else console.log("appended data");
});