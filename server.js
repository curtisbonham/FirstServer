import * as http from 'node:http'

const server = http.createServer((req, res) => {
  let url = request.url.split('/');
  if(url[1] === '') {
    if(request.method === 'GET') {
      res.end('Hello, Galvanize!');
    }
  }
  res.end('Hello, Galvanize!')
});

server.listen(3000, "localhost", () => {
  console.log(`Server running at http://localhost:3000/`);
});