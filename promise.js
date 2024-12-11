// 1. Promise
// Definition: A Promise is an object that represents the eventual completion (or failure) of an 
//asynchronous operation and its resulting value.
// When to use: Use a Promise when you have an asynchronous operation (like fetching data from a server) 
// that will complete at some point in the future.
//  It can either succeed (resolve()) or fail (reject()).
// The stages promise returns are pending,fullfilled(resolved),rejected

// 2. .then()
// Definition: .then() is a method used to handle the successful completion of a Promise. 
// It executes when the Promise is resolved (resolve()).
// When to use: Use .then() to define what happens after a promise is successfully resolved


// 3. .catch()
// Definition: .catch() is used to handle errors when a Promise is rejected (reject()).
// When to use: Use .catch() to handle the case when the Promise fails, for example, due to a network error.

function fetchData() {
    return new Promise((resolve, reject) => {
        let success = true; // Change to `false` to test rejection
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Error fetching data");
            }
        }, 1000);
    });
}

fetchData()
    .then((result) => {
        console.log("Then:", result);
    })
    .catch((error) => {
        console.error("Catch:", error);
    });