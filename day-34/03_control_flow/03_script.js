let myArray = [1,2,3,4,5]
myArray.forEach(element => {
    console.log(element)
});
console.log("\n")

myArray.forEach(function(elements, index, arr){
    console.log(elements,index)
})
console.log("\n")

function obj(elements, index, arr){
    console.log(elements,index,arr)
}
myArray.forEach(obj)
console.log("\n")

// Array of objects
let objArr = [
    {
        langName : "javascript",
        extension : ".js"
    },
    {
        langName : "python",
        extension : ".py"
    },
    {
        langName : "C++",
        extension : ".cpp"
    }
]

objArr.forEach((elements) => {
    console.log(elements)
    console.log(Object.keys(elements))
    console.log(Object.values(elements))
    console.log(Object.entries(elements))
    console.log("\n")
})