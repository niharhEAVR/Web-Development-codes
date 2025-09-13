// Dates 

let myDate = new Date() // Date id object in javascript
console.log(typeof myDate)
console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)

let myCreatedDate = new Date(2024, 0, 12) // the month in javascript is starts from 0 = january 
console.log(myCreatedDate.toDateString())
let myCreatedDate2 = new Date(2024, 0, 12, 14, 34)
console.log(myCreatedDate2.toLocaleString())
let myCreatedDate3 = new Date("2024-01-31")
console.log(myCreatedDate3.toLocaleString())


let myTimeStamps = Date.now()
console.log(myTimeStamps)
// date have lot more methods

