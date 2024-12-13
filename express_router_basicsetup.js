const express = require('express');
const app = express();
const router = require('./routes/express_router');//or require('./routes/express_router.js')

// Use router for all routes under '/user'
app.use('/user', router);

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server running at port 3000");
});
