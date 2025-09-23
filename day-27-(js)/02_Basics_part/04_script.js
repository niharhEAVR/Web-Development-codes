function login(user) {
    return `${user} just logged in.`
}
let loginn = login("Nihar")
console.log(loginn)




// Function with objects and array

function priceses(...price) {
    return price;
} // that three dot is not a spread operator, here it is rest operator, so the three dot will be decided on our use case
// so here the three dot is used to convert all the arguments into an array
console.log(priceses(1033, 24445, 456, 6566, 1999))
console.log(typeof priceses(1033, 24445, 456, 6566, 1999)) // it will give object because array is a type of object in javascript



const user = {
    name: "william",
    age: 49,
    info: "retired"
}
function greeting(anyUser) {
    // the hasOwnProperty is giving boolean values
    if (anyUser.hasOwnProperty("name")) {
        console.log(`Hello ${anyUser.name}`)
    } else {
        console.log("the user object dont have the name key")
    }
}
greeting(user)




// Arrow functions

// this is an original arrow function
let sum = (a, b) => {
    return a + b;
}
console.log(sum(5, 6))

// this is an implicite arrow function
let sum2 = (a, b) => (a + b) // here a+b automatically gets returned because here we have used round braces or 1st bracket (it is important for react), remember one thing that round bracket doesnot required return keyword but curly brackets needs return keyword
console.log(sum2(5, 5))

// now here comes a question, how can i return a object in implicite arrow function
let obj = () => ({ name: "nihar" }) //then we have to cover it with paranthesis
console.log(obj())

console.log("\n")

function car(carName) {
    console.log("hey nihar is this " + carName + " yours?")
}
car("toyota")


function arithmetic(x, y) {
    console.log("answer: ", (x + y))

}
arithmetic(
    a = 12,
    b = 30
)
function arithmetic2(x, y) {
    return (x + y)

}
result = arithmetic2(4, 5)
result2 = arithmetic2(3)
result3 = arithmetic2(2, 5)
console.log("The result is: ", result)
console.log("The result is: ", result2) // this will give NaN because second parameter is missing
console.log("The result is: ", result3)


function arithmetic3(x, y, z = 3) {
    // this z is default parameter
    return (x + y + z)
}
result4 = arithmetic3(4, 5)
console.log("The result is: ", result4)



// arrow function
const func2 = (x) => {
    console.log(x)
}
func2("I am an arrow function")
{
    const sum = (a, b) => {
        return a + b
    }
    console.log(sum)
    console.log(typeof sum)
    console.log(sum(2, 3))
}