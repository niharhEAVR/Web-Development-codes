console.log("-------------- node objects ----------------")
console.log(this); // this will print our node objects, means nothing, because it is our local machine, but if you type this command in browser then you will get to see browser objects

console.log("\n\n-------------- function objects ----------------")
function random(){
    console.log(this);
}
random() // this is printing function objects

console.log("\n\n-------------- arrow function objects ----------------")
let anotherRandom = ()=>{
    console.log(this);
}
anotherRandom() // here nothing gets printed because arrow function doesnot have any access of original function objects