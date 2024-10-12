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
{
    let arr = [1,2,4,3.4,5.5,34,5,9,11,13,7]
    const evenVlues = (element =>{
        return element%2 === 0
    })
    console.log(arr.filter(evenVlues))
}
{
    let arr = [1,2,4,3.4,5.5,34,5,9,11,13,7]
    const lessThanValues = (element =>{
        return element <= 11
    })
    console.log(arr.filter(lessThanValues))
}
{
    // practice
    let marks = [45,25,48,34.4,55.5,34,59,95,85,89,96]
    const greaterThan90 = (element =>{
        return element >= 90
    })
    console.log(marks.filter(greaterThan90))
}





console.log("Reduce")
{
    let arr = [1,2,3,4,5,6]
    const multlipliedVlue = ((a,b) => {
        return a*b
    })
    console.log(arr.reduce(multlipliedVlue))
}
{
    let arr = [1,2,3,4,5,6,101,19,919,69]
    const output = ((previous,current) => {
        return previous > current ? previous : current;
    })
    console.log(arr.reduce(output))
    // this code is printing the largest number in the array
    // < put this and you will get the lowest value
}
{
    // practice
    // let num = prompt("Enter a number: ")
    let num = 5;
    let arr = [];
    for(let i = 0; i<num; i++){
        arr[i] = i+1;
    }
    console.log(arr)
    let sum = ((a,b)=>{
        return a+b
    })
    console.log(arr.reduce(sum))
    //factorial
    let mul = ((a,b)=>{
        return a*b
    })
    console.log(arr.reduce(mul))
}



// you i want to form a random array using prompt then we use this Array.from method
{
    const arr = Array.from("nihar")
    console.log(arr)
}



