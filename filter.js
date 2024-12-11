//  filter
// Purpose: Creates a new array with all elements that pass a test (a provided function).
// Syntax: array.filter(callback)
// callback: A function that tests each element.

const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
