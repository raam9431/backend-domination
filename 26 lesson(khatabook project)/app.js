const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/create', function (req, res) {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = currentDate.getFullYear();

  const formattedDate = ```${day}-${month}-${year}.txt`;
  console.log(formattedDate);

  fs.writeFile(`./files/${formattedDate}`, "daal cheeni", function (err) {
    if (err) return res.send("something went wrong")
    else res.send('done ');
  });

});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

