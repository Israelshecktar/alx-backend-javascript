// an advanced http server
const http = require('http');
const url = require('url');
const countStudents = require('./3-read_file_async');

const PORT = 1245;

const app = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  res.setHeader('Constent-Type', 'text/plain');

  if (reqUrl.pathname === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (reqUrl.pathname === '/students') {
    const databasePath = process.argv[2];
    res.statusCode = 200;
    res.write('This is the list of our students\n');
    countStudents(databasePath)
      .then(() => {
        res.end();
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
