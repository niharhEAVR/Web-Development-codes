let arr = [1,2,3,4,5,7]
console.log(arr)
console.log(typeof arr)
// in javascript the type of an array is always object
console.log(arr.length)


// array is mutable
// arr[0] = 69
// console.log(arr[0])
// console.log(arr)


// array from number to convert into string
// the numbers converted into string
console.log(arr.toString())


//the comma will change if we use join method
console.log(arr.join(" and "))


// the last array value will pop out of the array
console.log(arr.pop())
console.log(arr)
// if we print the array now this give only five values


// push method will add value at the last
// console.log(arr.push(101)) //this will give the length
arr.push(100)
console.log(arr)
arr.push("nihar")
console.log(arr)


// shift will cut the first value of the array
console.log(arr.shift())
console.log(arr)


// unshift method will add value at first
arr.unshift(69) // this will add second
arr.unshift("debnath") // this will add first
// javascript follows sequense
console.log(arr)


delete arr[7]
console.log(arr)
// delete method will delete the value according to the index but the memory still remains and it will print that undefined, means that memory allocate is remains in array but there is no value
console.log(arr[7])


// concat method will add two or more array's
{
    let a1 =[1,2,3]
    let a2 = [4,5,6]
    let a3 = [7,8,9]

    console.log(a1.concat(a2,a3))
}


{
    let a =[5,3,79,35,1,2]
    a.sort()
    console.log(a)
}


{
    let a = [1,"nihar",3,4,5]
    a.splice(2,2)
    console.log(a)
    a.splice(2,2,69,919)
    console.log(a)
}


{
    const a = [1,2,3,4,5]
    
    console.log(a.slice(2))
    console.log(a.slice(2,4))
    // array
}