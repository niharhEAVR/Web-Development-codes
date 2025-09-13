// ==================== String ========================
const myName = new String("Nihar") // this ia another method of creating a string, Thw new keyword used for objects
console.log(myName)



// ==================== Number ========================
let balance = new Number(3090.6993)
console.log(typeof Number)
console.log(balance)
console.log(`Your total Balance = ${balance.toFixed(2)}`)
console.log(balance.toPrecision(5)) // this functionn roundoff the number



let ambaniBankBalance = 103230827
console.log(`Ambani bank balance = ${ambaniBankBalance.toLocaleString('en-IN')} crore`)




// ==================== Maths ========================
console.log(Math) //math is an object
console.log(Math.round(4.7))
console.log(Math.ceil(4.00000000001))
console.log(Math.floor(4.999999999))
console.log(Math.abs(-4)) // this means print the absolute value



console.log(Math.random()) // this method will give random number from 0 to 0.99999999
console.log((Math.random()*10)) // this will give random number from 0 to 9.999999999


// but i need a random number generator from 100 to 200 then this needs logic
let min = 100
let max = 200
for (let index = 0; index < 1000; index++) {
    console.log(Math.ceil(Math.random()*(max - min) + min)) // we cant use ceil() function if we are adding 1,, if we do not use ceil() or instead use floor() then we can add 1,, otherwise at some points random number come 201
}

console.log("\n")

for (let index = 0; index < 1000; index++) {
    var fault = Math.ceil(Math.random()*(max - min + 1) + min) // we cant use ceil() function if we are adding 1,, if we do not use ceil() or instead use floor() then we can add 1,, otherwise at some points random number come 201
    if (fault === 201){
        console.log(`the fault is = ${fault}`)
        break;
    }
}


console.log("\n")

{
    // Returns a random integer from 0 to 9
    let randomNumber = Math.floor(Math.random()*10);
    console.log(`The random number is: ${randomNumber}`);
}
{
    // Returns a random integer from 1 to 100:
    let randomNumber = Math.floor(Math.random()*100)+1;
    console.log(`The random number is: ${randomNumber}`);
}
{
    // Returns a random integer from 1 to 101:
    let randomNumber = Math.floor(Math.random()*101)+1;
    console.log(`The random number is: ${randomNumber}`);
    
}
// this is how you can controll the Math.random function