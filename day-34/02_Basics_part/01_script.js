// there is two type of copy method in javascript => one is shallow copy means (reference or heap) and another one is deep copy means (stack)


// splice(): Used to modify the original array by adding, removing, or replacing elements.
// slice(): Used to extract a portion of the array without modifying the original array.

let array = [1, 2, 3, 4, 5];
array.splice(2, 1); // Removes 1 element from index 2
console.log(array); 


let array2 = [1, 2, 3, 4, 5];
let newArray = array2.slice(1, 3); 
console.log(newArray); 
console.log(array2);    // (original array is unchanged)


let myArr = [1,2,3,[4,4,5],8,[5,3,6],[7,6,[6,4,6,7]]]

console.log(myArr.flat(Infinity)) // this infinity means that all subarray will come to an new array (in depth)


console.log(Array.isArray("nihar"));
console.log(Array.from("nihar"));

let name1 = "nihar"
let name2 = "suresh"
let name3 = "mohit"
console.log(Array.of(name1, name2, name3));


let myName = ["n","i","h","a","r"]
console.log(myName.join())
console.log(myName.join(""))
console.log(myName.join(" - "))
console.log(myName.join("%"))