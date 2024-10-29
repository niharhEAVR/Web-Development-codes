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
let user1 ={ 
    name : "nihar",
    age : 19
}
let user2 = user1
console.log(user2)
console.log(user1)
user2.age = 45

// see that the user2 can change the age of user because user2 have the reference of the value of user1 

console.log(user1)
console.log(user2)