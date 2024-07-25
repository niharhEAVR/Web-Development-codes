function car(carName) {
    console.log("hey nihar is this "+carName+" yours?")
    
}
car("toyota")


function arithmetic ( x, y) {
    console.log( "answer: ",(x + y) )
    
}
arithmetic(
    a = 12,
    b = 30
)
function arithmetic2 ( x, y) {
    return( x + y )
    
}
result = arithmetic2(4,5)
result2 = arithmetic2(3)
result3 = arithmetic2(2,5)
console.log("The result is: ",result)
console.log("The result is: ",result2)
console.log("The result is: ",result3)


function arithmetic3 ( x, y, z=3) {
    // this z is default parameter
    return( x + y + z)
}
result4 = arithmetic3(4,5)
console.log("The result is: ",result4)



// arrow function
const func2 = (x) =>{
    console.log(x)
}
func2("I am an arrow function")
