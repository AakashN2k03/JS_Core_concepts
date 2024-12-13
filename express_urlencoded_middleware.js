// URL-encoded is a format used to send data in the body of a POST or PUT request.
// It's commonly used in web forms where the data is encoded as key=value pairs, separated by &

const express = require('express');
const app = express();

// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

//extended: true: Allows parsing of nested objects (e.g., person[name]=Aakash).
//extended: false: Only allows flat key-value pairs.

// Route to handle form data
app.post('/form', (req, res) => {
    const { name, age, role } = req.body; // Access parsed data
    if (!name || !age || !role) {
        return res.status(400).send({ message: 'Missing required fields!' });
    }
    console.log(req.body)
    res.send({message: 'Form data received successfully',data: { name, age, role }});
});

app.listen(3000, () => console.log('Server running on port 3000'));


//SUMMARY
// Feature	   urlencoded (x-www-form-urlencoded)	                JSON (application/json)
// Data Format	      Key-value pairs (flat)	                        Key-value pairs (can be nested)
// Data Example	      name=Aakash&age=24&role=Developer	               {"name": "Aakash", "age": 24, "role": "Developer"}
// Use Case	Form      submission(HTML forms),simple key-value pairs	   API communication, complex and structured data
// Compatibility	  Native to HTML forms	                           Requires parsing for non-JSON clients
// Data Structure	  Flat key-value pairs only	                       Supports objects and arrays
// Size	              Generally smaller for simple data	                Larger for complex data