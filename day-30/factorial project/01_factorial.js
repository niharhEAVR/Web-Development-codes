let a = prompt("Enter the number:")
let facto = 1
for (let index = a; index >= 1; index--) {
    facto = facto*index;
}
alert(`The factorial of ${a} is ${facto}`)