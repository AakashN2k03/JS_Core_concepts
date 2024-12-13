// Morgan (Third-party Middleware) is used to log incoming HTTP requests to your server, which helps in tracking and debugging.
// It’s useful for monitoring your app’s behavior, performance, and detecting issues like failed requests.

// it logs each incoming request based on a predefined format or a custom format that you specify.
// Request method (GET, POST, etc.)
// Request URL
// Response status code (200, 404, etc.)
// Response time (in milliseconds)


const express = require('express');
const morgan = require('morgan');
const app = express();

// Use Morgan middleware for logging HTTP requests
// Installation -> npm install morgan
app.use(morgan('tiny')); // 'tiny' is a predefined log format

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
