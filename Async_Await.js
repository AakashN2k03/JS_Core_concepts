// 1. async
// Definition: async is a keyword used to define a function that always returns a Promise. 
// It allows you to use await inside it to pause execution until a Promise resolves.
// When to use: Use async when you want to create a function that handles asynchronous code and
//  you want to use await for cleaner, synchronous-like code.


// 2. await
// Definition: await is used inside an async function to pause execution until a Promise resolves. 
// It allows for cleaner and more readable asynchronous code.
// When to use: Use await to wait for the resolution of a Promise in an async function. 
// It makes the code look synchronous, but still operates asynchronously.



// Simulate an async function that returns a promise (like fetching data)
function fetchData() {
    return new Promise((resolve, reject) => {
        const success = true; // Change to false to simulate failure
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Error fetching data.");
            }
        }, 1000);
    });
}

// Using Async/Await with try/catch for error handling
async function fetchDataAsync() {
    try {
        const result = await fetchData(); // Wait for the promise to resolve
        console.log("Async/Await:", result);
    } catch (error) {
        console.error("Async/Await Catch:", error);
    }
}

// Using then/catch for handling promise
fetchData()
    .then((result) => {
        console.log("Then:", result);
    })
    .catch((error) => {
        console.error("Catch:", error);
    });

// Call the async function
fetchDataAsync();
