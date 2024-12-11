// // In JavaScript, the splice() method is used to add, remove, or replace elements in an array. 
// // It modifies the original array and returns an array containing the removed elements (if any).

// // SYNTAX 
// //array.splice(start, deleteCount, item1, item2, ..., itemN)

// Parameters:

// start:The index at which to start changing the array.
// If negative, it is treated as array.length + start.

// deleteCount:The number of elements to remove from the array.
// If 0, no elements are removed.

// item1, item2, ..., itemN (Optional):The elements to be added in an array

//Remove elements:

let delarr = [1, 2, 3, 4, 5];
let removed = delarr.splice(2, 2); // Remove 2 elements starting at index 2
console.log(delarr);      // [1, 2, 5]
console.log(removed);  // [3, 4]

//Add elements:

let addarr = [1, 2, 5];
addarr.splice(2, 0, 3, 4); // Add elements 3 and 4 at index 2
console.log(addarr); // [1, 2, 3, 4, 5]

//Replace elements:
let replacearr = [1, 2, 3, 4, 5];
replacearr.splice(1, 2, 10, 20); // Replace 2 elements starting at index 1 with 10, 20
console.log(replacearr); // [1, 10, 20, 4, 5]

//Remove all elements from a specific index:
let delAllarr = [1, 2, 3, 4, 5];
delAllarr.splice(2); // Remove all elements starting from index 2
console.log(delAllarr); // [1, 2]

//Insert at the end:
let insert_arrend = [1, 2, 3];
insert_arrend.splice(insert_arrend.length, 0, 4, 5); // Add 4 and 5 at the end
console.log(insert_arrend); // [1, 2, 3, 4, 5]

