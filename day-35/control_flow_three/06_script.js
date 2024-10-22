// map syntax also like filter and used for array
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

{
    let newArray = myArray.map(elements => {
        return elements + 10
    })
    console.log(newArray)
}
console.log("\n")


{
    {
        let newArray = myArray.map(elements => elements < 5)
        console.log(newArray)
    }
    {
        let newArray = myArray.map(elements => elements * 5)
        console.log(newArray)
    }
    {
        let newArray = myArray.filter((elements,index) => index%2 === 0)
        console.log(newArray)
    }
    {
        let newArray = myArray.filter(elements => elements * 5)
        console.log(newArray)
    } // as you see that filter cant transform arrays, filter only used for checking conditions.

}

// map() transforms every element in the array.
// filter() selects only elements that match a certain condition.




