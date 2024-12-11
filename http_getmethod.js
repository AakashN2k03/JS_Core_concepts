const http = require('http');

// Making a GET request to an example URL
http.get('http://example.com', (res) => {
  let data = '';

  // Collect the response data in chunks
  res.on('data', (chunk) => {
    data += chunk;  // Append each chunk to the data variable
  });

  // When the response ends, log the data
  res.on('end', () => {
    console.log('Response data:', data);  // Log the full response data
  });

  // Handle any error during the request
}).on('error', (err) => {
  console.log('Error:', err);  // Log any errors
});

// on() is a method used to attach event listeners to an object that emits events.Error,data,end are events
// 'data': This is triggered when a chunk of data is received from the server.
// 'end': This is triggered when all data has been received.
// 'error': This is triggered if there's an error in the request.
