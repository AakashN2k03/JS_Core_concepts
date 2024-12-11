// reduce
// Purpose: Applies a function to each element in the array (from left to right) to reduce it to a single value.
// Syntax: array.reduce(callback, initialValue)
// callback: A function that takes an accumulator and the current element.
// initialValue: (optional) The initial value of the accumulator.

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 10


const reducelist=[1,2,3,4,5]
const result=reducelist.reduce(maximum)

function maximum(accumulator,current)
{
    return Math.max(accumulator,current)
}
console.log(result)