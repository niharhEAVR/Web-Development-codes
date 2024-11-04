function login (user){
    return `${user} just logged in.`
}
let loginn = login("Nihar")
console.log(loginn)




// Function with objects and array

function priceses (...price){
    return price;
} // that three dot is not a spread operator, here it is rest operator, so the three dot will be decided on our use case
console.log(priceses(1033,24445,456,6566,1999))


const user = {
    name : "william",
    age : 49,
    info : "retired"
}
function greeting(anyUser){
    // the hasOwnProperty is giving boolean values
    if(anyUser.hasOwnProperty("name")){ 
        console.log(`Hello ${anyUser.name}`)
    }else{
        console.log("the user object dont have the name key")
    }
}
greeting(user)




// Arrow functions

// this is an original arrow function
let sum = (a,b)=>{
    return a+b;
}
console.log(sum(5,6))

// this is an implicite arrow function
let sum2 = (a,b) => (a+b) // here a+b automatically gets returned because here we have used round braces or 1st bracket (it is important for react), remember one thing that round bracket doesnot required return keyword but curly brackets needs return keyword
console.log(sum2(5,5))

// now here comes a question, how can i return a object in implicite arrow function
let obj = ()=>({name: "nihar"}) //then we have to cover it with paranthesis
console.log(obj())