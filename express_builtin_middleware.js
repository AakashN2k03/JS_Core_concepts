// express.json() is a built-in middleware in Express that reads incoming JSON payloads and 
// parses them into a JavaScript object.

const express = require('express');
const app = express();

// Apply the express.json() middleware
app.use(express.json());

// A POST route to handle JSON payload
app.post('/json-data', (req, res) => {
    console.log(req.body); // Parsed JSON data from the client
    res.send({ message: 'JSON received successfully', data: req.body });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
