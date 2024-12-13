const express = require('express');
const router = express.Router();

// GET route for /user/getuser
router.get('/getuser', (req, res) => {          //use controller folder for handling controllers(i.e functions used in routes) so that it will look neat
    res.send("GET method successfully worked");
});

// POST route for /user/postuser
router.post('/postuser', (req, res) => {
    res.json({
        "user": "Steve Rogers",
        "age": 123
    });
});

module.exports = router;
