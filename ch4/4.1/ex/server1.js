const http = require('http');

const server = http
  .createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.write('<h1>Hello Node</h1>');
    res.write('<p>Node</p>');
    res.end('<p>javascript</p>');
  })
  .listen(8080);

server.on('listening', () => {
  console.log('8080번 포트에서 서버 대기중');
});

server.on('error', () => {
  console.log('8080번 포트에서 에러 발생');
});
