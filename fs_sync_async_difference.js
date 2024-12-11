// fs.readFileSync (Synchronous)
// What it does: Reads the file in a blocking way.
// How it works:
// The program stops and waits until the file is completely read.
// The rest of the code will not execute until the file reading is finished.

console.log("fs.readFileSync (Synchronous)")

const fs = require('fs');

try {
  const data = fs.readFileSync('example.txt', 'utf8'); // Blocks execution until the file is read
  console.log('File contents:', data); // Runs after the file is read
} catch (err) {
  console.error('Error reading the file:', err);
}

console.log('This runs *after* file reading is done.');



//fs.readFile (Asynchronous)
// What it does: Reads the file in a non-blocking way.
// How it works:
// The file reading happens in the background, allowing the program to continue executing other code 
// while the file is being read.
// Once the file reading is done, the callback function is executed with the result or error.

console.log('fs.readFile (Asynchronous)')

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log('File contents:', data); // Runs once the file is read
  }
});

console.log('This runs *before* file reading is done.');
