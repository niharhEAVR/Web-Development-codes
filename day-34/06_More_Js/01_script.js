console.log(1);
console.log(2);
console.log(3);

setTimeout(()=>{
    console.log(4)
},0)

console.log(5);
console.log(6);
console.log(7);


// Execution Flow:-

// Synchronous Code Execution:
// JavaScript executes code in a single-threaded manner, meaning it processes one task at a time in the order they are written.
// The first three console.log() statements are executed in order, so 1, 2, and 3 are printed.

// setTimeout():
// The setTimeout() function schedules the callback function (which logs 4) to run after a delay of 0 milliseconds. However, this does not mean it runs immediately.
// Instead, it places the callback in the event queue to be executed after the current execution context (or stack) is finished.

// Remaining Console Logs:
// After the setTimeout(), the next three console.log() statements are executed sequentially, printing 5, 6, and 7.

// Event Loop:
// Once the synchronous code (the main stack) is finished executing, the event loop checks the event queue.
// The event queue contains the callback function from setTimeout(), which is then executed, resulting in 4 being printed.