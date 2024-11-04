document.title = 'Array loops'

{
    console.log("for loop using array")
    let arr = [1, 2, 3, 4, 98, 44, 55]
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index]
        console.log(element)
    }
}


{
    console.log("for-of loop using array")
    let arr = [1, 2, 3, 4, 98, 44, 55]
    for (const iterator of arr) {
        console.log(iterator)
        // this thing will gonna print the elements of the array but in short form
    }
    console.log("iterator, this name can be change")
    for (const value of arr) {
        console.log(value)
    }
}


{
    console.log("forEach loop using array")
    let arr = [1, 2, 3, "n", 5, 6]
    arr.forEach((value, index, arr) => {
        console.log(value, index, arr)
    })

    console.log("forEach loop uses")
    let arr2 = ["Kolkata", "Mumbai", "Delhi", "Bangaluru"]
    arr2.forEach((value, index, arr) => {
        console.log(value.toUpperCase(), index, arr)
    })
}


{
    // finding the average marks
    let marks = [85, 97, 44, 37, 76, 60];
    let total = 0;
    for (const element of marks) {
        total = total + element;
    }
    let average = total / marks.length;
    console.log(`The average marks is: ${average}`)
}


{
    // for given array with prices of 5 items , all items have an offer of 10% on them, Change the array to store finalprice after applying offer
    let originalPrice = [250, 645, 300, 900, 50];
    let offerAppliedPrice = [];
    // for (const element of originalPrice) {
    //     let price = element - ((element*10)/100);
    //     offerAppliedPrice.push(price);
    // }
    originalPrice.forEach((value) => {
        let revisedPrice = value - ((value * 10) / 100)
        offerAppliedPrice.push(revisedPrice)
    })
    console.log("The offer price is", offerAppliedPrice)
}



{
    // forEach practice uqestion

    // let arr = [1,2,3,4,5]
    // arr.forEach((value)=>{
    //     console.log(value**2)
    // })

    //another method
    // let arr2 = [1,2,3,4,5]
    // let square = (value)=>{
    //     console.log(value ** 2)
    // }
    // arr2.forEach(square)

    //another method
    let arr3 = [1, 2, 3, 4, 5]
    function square(i){
        console.log(i**2)
    }
    arr3.forEach(i => square(i))
}