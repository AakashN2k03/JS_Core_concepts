//In Express, next() is a function used in middleware to pass control to the next middleware 
//or route handler in the request-response cycle.
//If next() is not called, the request will hang and not proceed.

const express = require('express');
const app = express();

// First middleware function
app.use((req, res, next) => {
    console.log('This is the first middleware.');
    next();  // Pass control to the next middleware or route handler
});

// Second middleware function
app.use((req, res, next) => {
    console.log('This is the second middleware.');
   next();  // Pass control to the next middleware or route handler
});

// Route handler for the root path
app.get('/', (req, res) => {
    console.log('This is the route handler.');
    res.send('Hello, World!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
