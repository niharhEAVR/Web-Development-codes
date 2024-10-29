{
    let myArray = [3, 7, 8, 4, 5]
    let newArray = myArray.forEach((items) => {
        return items < 5
    })
    console.log(newArray)
}
// In array forEach loop dont return any function values, thats why we need filter, its syntax exactly same like forEach but here it will return some values

{
    let myArray = [3, 7, 8, 4, 5]
    // let newArray = myArray.filter((items) => {return items < 5})

    let newArray = myArray.filter((items) => items < 5) // this is implicite coding, we dont have to write return keyword 
    console.log(newArray)

    // what is implicite fundtion or coding?
    // we cant use {} this brackets or if we use it we have to give return keyword
}

{
    //  this is the forEach method of doing this, but look here that we still didnt use return keyword instead we use conditional concept and stored in new array
    let myArray = [3, 7, 8, 4, 5]
    let newArray = []
    myArray.forEach((items =>{
        if(items<5){
            newArray.push(items)
        }
    }))
    console.log(newArray)
}