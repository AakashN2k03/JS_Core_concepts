// //The http module enables Node.js to interact with HTTP servers. 
// you can create a web server, make HTTP requests, and handle responses.
//  It is used primarily for building web APIs, web applications, or even proxy servers
const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;                         // to get resonse in html use 
  res.setHeader('Content-Type', 'text/plain');  //   res.setHeader('Content-Type', 'text/html'); 
  res.end('Hello, World!');                     //  res.end('<h1>Hello, World!</h1>');
});

// Make the server listen on port 4000
server.listen(3000,(err) => {
    if(err)
    {
        console.log("error in listening to a server")
    }
    else{
        console.log('Server running at http://localhost:3000/');
    }
});
