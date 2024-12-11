let count = 0;

const intervalId = setInterval(() => {
  console.log("This runs every 2 seconds", count);
  count++;

  if (count === 5) {
    clearInterval(intervalId); // Stops after 5 iterations
  }
}, 2000); // Runs every 2 seconds

//settimeout
const settimeoutresult = setTimeout(() => {
  console.log("after three sec");
}, 3000);
console.log(settimeoutresult);
