// first thing first that array is mutable

{
    let arr = [1, 2, 3, 4, 5, 7]
    console.log(arr)
    console.log(typeof arr)
    // in javascript the type of an array is always object
    console.log(arr.length)
    console.log("\n\n")
}
{
    
    let arr = [1, 2, 3, 4, 5, 7]
    arr[0] = 919
    console.log(arr[0])
    console.log(arr)
    
    console.log("\n\n")
}
{
    let arr = [1, 2, 3, 4, 5, 7]
    // array from number to convert into string
    // the numbers converted into string
    console.log(arr.toString())


    //the comma will change if we use join method
    console.log(arr.join(" and "))


    // the last array value will pop out of the array
    console.log(arr.pop())
    console.log(arr)
    // if we print the array now this give only five values
    console.log("\n\n")
}
{
    let arr = [1, 2, 3, 4, 5, 7]
    // push method will add value at the last
    console.log(arr.push(101)) // The .push() method in JavaScript adds one or more elements to the end of an array and returns the new length of the array after the addition.
    console.log("\n\n")
}
{
    let arr = [1, 2, 3, 4, 5, 7]
    arr.push(100)
    arr.push("nihar")
    console.log(arr)
    console.log("\n\n")
}
{
    
    let arr = [1, 2, 3, 4, 5, 7]
    // shift will cut the first value of the array
    console.log(arr.shift())
    console.log(arr)
    console.log("\n\n")
}
{
    let arr = [1, 2, 3, 4, 5, 7]
    // unshift method will add value at first
    arr.unshift(69) // this will add second
    arr.unshift("debnath") // this will add first
    // javascript follows sequense
    console.log(arr)
    console.log("\n\n")
}
{
    
    let arr = [1, 2, 3, 4, 5, 7]
    delete arr[5]
    console.log(arr)
    // delete method will delete the value according to the index but the memory still remains and it will print that undefined, means that memory allocate is remains in array but there is no value
    console.log(arr[5])
    console.log("\n\n")
}


// concat method will add two or more array's
{
    let a1 = [1, 2, 3]
    let a2 = [4, 5, 6]
    let a3 = [7, 8, 9]

    console.log(a1.concat(a2, a3))

    let arr1 = ["apple", "banana", "mango"];
    let arr2 = [1, 2, 3];
    // concat method doesnot change the original array
    arr1.concat(arr2);
    console.log(arr1);
    console.log("\n\n")
}


{
    // sort only sort the first digit of a number from low to high
    let a = [5, 3, 79, 35, 1, 2]
    a.sort()
    console.log(a)
    console.log("\n\n")
}

{
    // splice method will change the original array
    let a = [1, "nihar", 3, 4, 5]
    a.splice(2, 2) // start at value position 2 and delete 2 values after that position
    console.log(a)
    console.log("\n\n")
}

{
    let a = [1, "nihar", 3, 4, 5]
    a.splice(2, 0, 69, 919, 49) // start at value position 2 and add 3 values after that position
    console.log(a)
    console.log("\n\n")
}

{
    let a = [1, "nihar", "kuku", 4, 5]
    // single value splice will start from the value position and delete the rest elements
    a.splice(3)
    console.log(a)
    console.log("\n\n")
}


{
    const a = [1, 2, 3, 4, 5]
    
    // single value slice will keep the values from index to rest elements
    console.log(a.slice(2))
    console.log(a.slice(2, 4))
    // slice method doesnot change the original array
    a.slice(2);
    console.log(a)
    console.log("\n\n")
}

{
    let companies = ["Boomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
    companies.shift(0)
    console.log(companies);
    console.log("\n\n")
}

{
    let companies = ["Boomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
    companies.splice(2, 1, "OLA")
    // the 1 is the position not the index value do not confuse with it
    console.log(companies);
    console.log("\n\n")
}

{
    let companies = ["Boomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
    companies.push("Amazon")
    console.log(companies);

}