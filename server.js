var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/todo.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'todo.css'));
});


app.get('/ui/todo.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'todo.js'));
});

app.get('/ui/todo.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'todo.png'));
});


const PORT = process.env.PORT || 3000; // Use 8080 for local development because you might already have apache running on 80
app.listen(PORT, function () {
  console.log(`ToDo app listening on port ${PORT}!`);
});
