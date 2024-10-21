// truthy and falsy values are the one types of values which we assume that the value is false or true

// falsy values

// false, 0, -0, BitInt 0n, "", null, undefined, NaN 


// truthy values

// "0", 'false', " ", [], {}, function(){}, true, numbers

if(function(){}){
    console.log(true)
}else{
    console.log(false)
}







// Nullish Coalescing Operator (??); null, undefined
let val1 = 5 ?? 10
let val2 = null ?? 10
let val3 = 10 ??  undefined
// this actually reject the null and undefied values and will store other thing
// when we create any big level projects then there might we get null or undefied data from any website, so this operator ignore the null or undefined data and will do oother staff
console.log(val1)
console.log(val2)
console.log(val3)

let val4 = undefined ?? 10 ?? 20
console.log(val4) // the first value its gets, the first value it stores
 