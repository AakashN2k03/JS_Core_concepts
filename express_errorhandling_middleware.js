// Error-handling middleware in Express is a special type of middleware used to handle errors that occur during the processing of requests. It is placed after all the regular middleware 
// and route handlers to catch any errors that might occur in the application.

//Error-handling middleware is defined by 4 arguments: (err, req, res, next).

// err: The error object (used in error-handling middleware).
// req: The request object.
// res: The response object.
// next: The next middleware function in the stack.


const express = require('express');
const app = express();

// Regular middleware
app.use(express.json());

// A sample route that throws an error
app.get('/error', (req, res, next) => {
    const err = new Error("Something went wrong!");
    next(err);  // Passing the error to the error-handling middleware
});

// Error-handling middleware (must be defined after all routes)
app.use((err, req, res, next) => {
    console.error(err.stack);  // Logs the error stack to the console
    res.status(500).json({
        message: "An error occurred!",
        error: err.message  // Sending error message in the response
    });
});

app.listen(3000, () => {
    console.log("Server running at port 3000");
});
