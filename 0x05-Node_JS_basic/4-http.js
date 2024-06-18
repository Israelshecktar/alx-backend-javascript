// creating a small http server
const http = require('http');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/palin');
  res.statusCode = 200;
  res.end('Hello Holberton School!');
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening to port ${PORT}`);
});

module.exports = app;
