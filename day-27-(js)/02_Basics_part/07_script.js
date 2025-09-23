// Javascript execution context
// Javascript callstack

function one(){
    two()
    console.log(1)
}
function two(){
    three()
    console.log(2)
}
function three(){
    console.log(3)
}
one()


function sum(a,b){
    return a+b
}
function result(a,b,value){
    console.log(typeof value);
    return value(a,b)
}
let addition = result(10,30,sum)
console.log(addition);
