// when we create any factorial or and 1-10 numbers sum then we use for loop and we used to do (sum = sum + i) or (facto = facto * i)
// reduce function do the work very easily

{
    // sum of numbers from 1-10
    let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    
    const initialValue = myArray.reduce((accumulator, currentValue) => {
        console.log(`previous value = ${accumulator} and current value = ${currentValue}`)
        return accumulator + currentValue
    }, 0); // the 0 here showing that from where the previous value should start, means first initialized value
    
    console.log(initialValue)
}


{
    // Factorial of numbers 
    let userInput = 5
    let myArray = []
    for (let i = 1; i <= userInput; i++) {
        myArray.push(i);
    }

    const initialValue = myArray.reduce((accumulator, currentValue) => {
        console.log(`previous value = ${accumulator} and current value = ${currentValue}`)
        return accumulator * currentValue
    }, 1); // the 1 is the first value of previous value, because when we used for loop for factorial we firat initialize the facto with 1 because 0 factorial is 0 thats why.
    console.log(initialValue)
}

{
    let travelExpense = [
        {
            expense_1 : "vehicle oil",
            price : 1000
        },
        {
            expense_2 : "room bookings",
            price : 2000
        },
        {
            expense_3 : "foods",
            price : 1000
        }
    ]

    let totalExpense = travelExpense.reduce((acc,curV)=>(acc + curV.price),0)
    console.log(totalExpense)

    // in the currentvalue the objects price is coming not the array elements
}