const http = require('http');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the port number: ', (port) => {
  rl.close();

  const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
  });

  server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
  });
});




// const http = require("http");
// const readline = require("readline");
// const r = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// r.question("Enter port on which you want to run the server: ", (port) => {
//     r.close();
//   const server = http.createServer((req, res) => {
//     res.end("Hello User");
//   });
//   server.listen(port, () => {
//     console.log("Server is running on port: ", port);
//   });
// });
