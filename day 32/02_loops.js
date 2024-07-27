{
    console.log("for loop using array")
    let arr = [1,2,3,4,98,44,55]
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
        console.log(element)
    }
}

{
    console.log("forEach loop")
    let arr = [1,2,3,4,5,6]
    arr.forEach((value , index, arr) =>{
        console.log(value, index, arr)
    })
}

{
    let arr = [1,2,3,4,98,44,55]
    for (const iterator of arr) {
        console.log(iterator)
        // this thing will gonna print the elements of the array but in short form
    }
    console.log("iterator, this name can be change")
    for (const value of arr) {
        console.log(value)
        
    }
}