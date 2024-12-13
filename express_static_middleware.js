//static middleware
// It is used to serve static files like HTML, CSS, JavaScript, images, videos, fonts, etc., to the client.
// Static files are those that don’t change dynamically based on user input

// Folder name can be anything but make sure to use the same name in express.static('folder_name)

const express = require('express');
const app = express();

// Middleware to serve static files from the 'Public' folder
app.use(express.static('./Public'));

// Start the server
app.listen(3000, () => {
    console.log("Server running successfully");
});
