// map
// Purpose: Creates a new array populated with the results of calling a provided function on 
// every element in the array.
// Syntax: array.map(callback)
// callback: A function that is applied to each element

const numbers = [1, 2, 3, 4];
const squares = numbers.map(num => num * num);
console.log(squares); // [1, 4, 9, 16]
