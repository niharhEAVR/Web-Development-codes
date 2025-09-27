function init(){
    let name = 'cooldude'
    function printName() {
        console.log(`my name is: ${name}`)
    }
    printName()
}
init()

function makeCounter() {
    let count = 0; // Variable in the outer scope

    return function() { // Inner function forms a closure
        count++; // Inner function can access and modify the outer scope variable
        return count;
    };
}

const counter = makeCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3