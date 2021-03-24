const http = require('http');
const fs = require('fs/promises');

//
const users = {};
//
http.createServer(async (req, res) => {
  try {
    if (req.method === 'GET') {
      if (req.url === '/') {
        const template = await fs.readFile('./index.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      } else if (req.url === '/about') {
        const template = await fs.readFile('./about.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      } else if (req.url === '/users') {
      }
    } else if (req.method === 'POST') {
    } else if (req.method === 'PUT') {
    } else if (req.method === 'DELETE') {
    }
  } catch (error) {}
});
