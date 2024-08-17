// asynhronous action of javascript
console.log("Hello welcome..")
console.log("Its me nihar")

setTimeout(() => {
    console.log("I am inside the setTimeout function")
}, 2000);
setTimeout(() => {
    console.log("I am a another string, inside the setTimeout function")
}, 0); // this will print in 4th line because the time is 0 millisecond

console.log("The end")