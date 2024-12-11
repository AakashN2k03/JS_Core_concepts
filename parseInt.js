// parseInt
// Purpose: Converts a string to an integer. It stops parsing when it encounters a character that isn't a number.
// Syntax: parseInt(string, radix)
// string: The value to be parsed.
// radix: (optional) A base (between 2 and 36) to interpret the number in.


console.log(parseInt("123"));   // 123
console.log(parseInt("123abc")); // 123 (stops at 'a')
console.log(parseInt("abc123")); // NaN (not a valid number)
