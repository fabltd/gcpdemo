const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Request received at: ${new Date()}`);
  res.end('Hello We fixed it');
});

console.log('Server starting…');

server.listen(8080, () => {
  console.log('Started.')
});

