const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task using asynchronous operations
  let count = 0;
  function loop() {
    if (count < 1000000000) {
      count++;
      process.nextTick(loop);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }
  }
  loop();
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});