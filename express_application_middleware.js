// Application-level middleware is middleware bound to the app instance in an Express.js application.
//  It executes on every incoming request unless restricted to specific routes or conditions.

//Most commonly usecases
// Authentication/Authorization
// Logging
// Validation
// Parsing incoming data
// Custom response headers

const express = require('express');
const app = express();

// Hardcoded username and password for demonstration
const validUsername = "Aakash";
const validPassword = 1234;

// Application-level middleware for authentication
function authenticate(req, res, next) {
    // Example: Checking against hardcoded username and password
    if (validUsername === "Aakash" && validPassword === 1234) {
        console.log("Authenticated User");
        next(); // Move to the next middleware or route
    } else {
        res.status(401).send("Unauthenticated User");
    }
}

// Apply the authentication middleware globally
app.use(authenticate);

// Example route
app.get('/users', (req, res) => {
    console.log("Route is working");
    res.send("Application level middleware has been set up");
});

// Start the server
app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
