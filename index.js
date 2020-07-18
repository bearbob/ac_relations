const http = require('http');
const express = require('express');

const app = express();
const hostname = 'localhost';
const port = 3000;

app.use(express.static('static'));
app.get('/', (req, res) => {
    res.sendFile('./static/index.html', { root: __dirname });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});