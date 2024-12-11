// The http.request() method is used to send an HTTP request, and you can specify various options 
// like the request method (GET, POST, etc.), headers, body data, and more.

const http = require('http');

// Setting up options for the HTTP request
const options = {
  hostname: 'www.example.com',  // Host of the server
  port: 80,                     // Port for HTTP (80 for default HTTP, 443 for HTTPS)
  path: '/',                    // Path to the resource you want to request(optional)
  method: 'GET',                 // HTTP method (GET, POST, etc.)
  headers: {                     // Optional headers
    'Content-Type': 'application/json'
  }
};

// Making the request
const req = http.request(options, (res) => {
  let data = '';

  // Listening for the 'data' event: triggered when a chunk of data is received
  res.on('data', (chunk) => {
    data += chunk;  // Append each chunk of data to the full response
  });

  // Listening for the 'end' event: triggered when the response is fully received
  res.on('end', () => {
    console.log('Full Response:', data);  // Log the complete response data
  });
}).on('error', (err) => {
  console.log('Error:', err);  // Log the error if the request fails
}); // you can use end here itself .end();

// End the request (this sends it)
// http.request() method requires an explicit call to req.end() in order to send the request. Without calling end(),
//  the request won't be executed, and the response handling will not be triggered.
req.end();
