const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Request received at: ${new Date()}`);
  res.end('I am new an improved');
});

console.log('Server starting…');

server.listen(8080, () => {
  console.log('Started.')
});

