import * as http from 'node:http'
const server = http.createServer((req, res) => {
  let url = req.url.split('/');
  if(url[1] === '') {
    if(req.method === 'GET') {res.end('Hello, Galvanize!');}}
  res.statusCode = 404;
  res.end();});
server.listen(3000, "localhost", () => {
  console.log(`Server running at http://localhost:3000/`);});