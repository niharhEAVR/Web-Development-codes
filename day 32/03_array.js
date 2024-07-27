console.log("Map")
{
    let arr = [1,2,4,11,13,7]
    let copy = []
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        copy.push(element**2)
    }
    console.log(copy)
}

{
    // using map we can make the short form of the upper loop
    let arr = [1,2,4,11,13,7]
    let copy = arr.map (element => {
        return element**2
    })
    console.log(copy)
    // =>{} this thing is called arrow function
    // if we are using only one argument in arrow function so then the bracket not needed
    
}


console.log("Filter")
{
    let arr = [1,2,4,3.4,5.5,34,5,9,11,13,7]
    const lessThanSeven = (element =>{
        if(element < 7){
            return true
        }
        return false
    })
    console.log(arr.filter(lessThanSeven))
}


console.log("Reduce")
{
    let arr = [1,2,3,4,5,6]
    const addValue = ((a,b) => {
        return a*b
    })
    console.log(arr.reduce(addValue))
}


// you i want to form a random array using prompt then we use this Array.from method
{
    const arr = Array.from("nihar")
    console.log(arr)
}