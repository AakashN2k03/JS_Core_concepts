// A callback function is a function that is passed into another function as an argument and 
// is executed at a later time when a certain event or condition is met.

// Main function
function greetUser(name, callback) {
    console.log("Hello, " + name);
    callback();  // Calling the callback function
}

// Callback function
function sayGoodbye() {
    console.log("Goodbye!");
}

// Calling the main function and passing the callback
greetUser("Alice", sayGoodbye);


// Explanation:
// greetUser is the main function that takes a callback function as a parameter.
// sayGoodbye is the callback function passed to greetUser.
// Inside greetUser, after greeting the user, the callback() (which is sayGoodbye) is called, printing "Goodbye!".