// faulty calculator

let random = (Math.random())
let num1 = prompt("Enter the first number: ")
let operation = prompt("Enter the operation: ")
let num2 = prompt("Enter the second number: ")

let object = {
    "+" : "-",
    "-" : "/",
    "*" : "-",
    "/" : "**"
}

if(random <= 0.1){
    operation = object[operation]
    alert (`The result is ${eval(`${num1} ${operation} ${num2}`)}`)
}else{
    alert (`The result is ${eval(`${num1} ${operation} ${num2}`)}`)

}