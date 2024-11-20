const http = require('http');

const server = http.createServer((req, res) => {
  console.log(`Request received at: ${new Date()}`);
  res.end('More bugs - must get more testing');
});

console.log('Server starting…');

server.listen(8080, () => {
  console.log('Started.')
});

