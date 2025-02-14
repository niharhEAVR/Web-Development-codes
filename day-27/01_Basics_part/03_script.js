// primitive datatype
// 7 types: string, number, boolean, null, undefined, symbol, bigint


// Reference (NON - Primitive)
// types: Array, Objects, Functions

// JavaScript is a dynamically typed language



// this program is focus on the memory on javascript
// there are two types of memory => Heap and Stack

// Heap stores Non-Primitive datatype values
// Stack stores Primitive datatype values


// Stack memory example 
console.log(`Stack Memory`)
let a = 12
let b = a
console.log(`b = ${b}`)
b = 34

console.log(`b = ${b}`)
console.log(`a = ${a}`)



// Heap memory example 
console.log(`\n\nHeap Memory`)
let user1 = {
    name: "nihar",
    age: 19
}
let user2 = user1
console.log(user2)
console.log(user1)
user2.age = 45

// see that the user2 can change the age of user because user2 have the reference of the value of user1 

console.log(user1)
console.log(user2)




let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 holds the same reference

arr2.push(4); // Modifying arr2 also affects arr1

console.log(arr1); // Output: [1, 2, 3, 4] (since both arr1 and arr2 point to the same array)
console.log(arr2); // Output: [1, 2, 3, 4]


function greet() {
    console.log("Hello, world!");
}

let sayHello = greet; // sayHello holds a reference to the function

sayHello(); // Output: "Hello, world!"




let user = {
    name: "Bob"
};

function updateUser(obj) {
    obj.name = "Charlie"; // Modifying the object
}

updateUser(user);

console.log(user.name); // Output: "Charlie"



