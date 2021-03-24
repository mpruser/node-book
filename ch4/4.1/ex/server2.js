const http = require('http');
const fs = require('fs').promises;

const server = http
  .createServer(async (req, res) => {
    try {
      const template = await fs.readFile('./server2.html');

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(template);
    } catch (error) {
      console.error(error);
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(error.message);
    }
  })
  .listen(8080);

server.on('listening', (...rest) => {
  console.log(rest);
  console.log('8081번 포트에서 서버 대기 중입니다!');
});