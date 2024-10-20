"use strict"; //treat all js code as newer version of javascript

// previously it was written for to treat all js code as new 

// nowadays our IDE is so smart , so we dont need to write this




let string = "False"
let string2 = ""
console.log(typeof string)
console.log(typeof string2)

let valueInBoolean = Boolean(string)
let valueInBoolean2 = Boolean(string2)

console.log(valueInBoolean)
console.log(valueInBoolean2)
console.log(typeof valueInBoolean)
console.log(typeof valueInBoolean2)

let a = 33
let s = String(a)
console.log(typeof s)


let num = -6
console.log(num)


console.log( 1+ parseInt("2"))

console.log("1" + 2 + 2) // the thing is that the string (1) first gets concatinate with and 2 and makes a new string (12) then the new string gets concatinated with 2 again and making it (122)
console.log(1 + 2 + "2") // here first the numbers getting added then concatinated with the string 

console.log(+true)
console.log(+"")
console.log(+"nihar")