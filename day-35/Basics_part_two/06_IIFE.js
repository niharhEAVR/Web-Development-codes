// Immediately Invoked Function Expressions (IIFE)
// (function definition)(function execution) --- its used to execute any type of functions immediately
(function show(){
    console.log("Hello World!");
})();


// In IIFE there is common mistake everyone will make if they dont have Proper knowledge of javascript
// and that is to give semicolon on ending of every function, otherwise the next IIFE functions will not work

(()=>{
    console.log("Hello IIFE");
})();

((name)=>{
    console.log(`Hello ${name}`);
})('nihar');



// this applicable for normal function also , 1st ou have to give semicolon on normal function then you can execute an IIFE