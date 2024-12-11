console.log("start")//global scope
setTimeout(() => {
    console.log("step1")
},2000);

setTimeout(() => {
    console.log("step2")
},4000);

setTimeout(() => {
    console.log("step3")
},1000);

console.log("end")//global scope

//global scope is executed first

//working 

// 1.Call Stack: Executes synchronous code, function calls, and operations.
//he call stack works on a Last In, First Out (LIFO) principle. It means that the last function pushed 
//onto the stack is the first to be executed.

//2.Web APIs (Browser):Handles asynchronous tasks like timers, I/O, and network requests. 
//It moves callback functions to the callback queue once the task is complete

// 3.Callback Queue: Holds functions waiting to be executed after the call stack is empty.

// 4.Event Loop: Continuously checks if the call stack is empty and 
// moves tasks from the callback queue to the call stack for execution.