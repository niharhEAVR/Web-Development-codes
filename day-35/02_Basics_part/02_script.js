// is this code we are focusing on object literal

let mySymbol = Symbol("NIHAR")

let user = {
    name : "nihar",
    "full name" : "Nihar Debnath",
    age : 19,
    [mySymbol] : "NIHAR"
}

console.log(user)
console.log(user.name)
console.log(user["name"])
console.log(user["full name"]) // javascript is a high level language, its already knows the keys inside the objects is a string,, thats why we cant access the full name using dot method
console.log(user[mySymbol]) // this is the original method of accessing symbol in objects, interview must be tough


user.greetings = function() {
    console.log(`my name is ${this.age}`) // as we are using object so for accessing the keys of that object we can use this keyword
}

console.log(user)
console.log(user.greetings())



user.email = "nihar@jod.com"
console.log(user)

Object.freeze(user) // this will freeze the user object and i cannot add or replace or do anything with the user object (its freezed just like bank account)
user.email = "nihardebnath@jod.com"
console.log(user)



