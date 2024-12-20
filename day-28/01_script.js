console.log("Hello World!")

var a = 12;
var a = a+3;

// javascript possible variable names
var $apple = 2;
var _apple = 3;
var apple12 = 4;
// these are the possible variable names


var b = false;
var c = "Nihar";

console.log(a)
console.log(b)
console.log(c)
console.log(typeof a ,typeof b ,typeof c )


const d = 12;
// d = d+3; this will give error because we defined d as a constant which we cannot change 
console.log(d)



console.log("\*let usage\*")
let a1 = 5;
{
    let b1 = 45;
    let a1 = 25;
    console.log(a1)
    console.log(b1)
}
console.log(a1)
// console.log(b1)
// when we use let variable outside the block it will give undefined
console.log("\*var usage\*")
var a12 = 10;
{
    var b1 = 7;
    // because we use b1 as a let varaible so that will not work outside the block, thats why we can use the same name outside the block 
    var a12 = 14;
    console.log(a12)
    console.log(b1)
}
console.log(a12)
console.log(b1)



console.log("\*Primitive datatypes\*")
{
    let n1 = 5;
    let n2 = 5.34;
    let n3 = BigInt(528294747);
    let n4 = "nihar";
    let n5 = true;
    let n6;
    let n7 = null;
    let n8 = Symbol("Hello!");
    
    console.log( n1, n2, n3, n4, n5, n6, n7, n8)
    console.log( typeof n1, typeof n2, typeof n3, typeof n4, typeof n5, typeof n6, typeof n7, typeof n8)
}


console.log("\*Objects\*")
{
    let myObj = {
        name : "nihar",
        profession : "student",
        age : 19
    }
    console.log(myObj)
    myObj.learning = "Web Development"
    console.log(myObj)
    myObj.learning = "Web Development + web3 + devops"
    console.log(myObj)

    // printing value of objects (single)
    console.log(myObj.name)
    console.log(myObj["learning"])
    // the both ways you can print object values

    myObj.age = myObj.age + 1;
    console.log(myObj.age);
    // updating the age 

    console.log(typeof myObj)
    console.log(typeof myObj.age)
}

