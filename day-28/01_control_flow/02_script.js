// print the table of 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`The table of ${i}`)        
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`)        
    }    
}


// for loop
/*
    for(let i = 1; i<=100; i++){
        console.log(i)
    }
*/
// while loop
/*
    let i = 0
    while(i<=10){
        console.log(i)
        i++
    }
*/
// do while loop
/*
    let i = 111
    do{
        console.log(i)
        i++
    }while(i<10)
*/




// for-of loop
{
    // this is how you can iteriate a string using  for-of loop (for single sigle characters)
    let name = "Nihar Debnath";
    let arr = ["n",4,5,"f","he","efj",6,false,true,undefined]
    for (const element of name) { // iterator -> characters
        console.log(`element = ${element}`)
    }
    console.log("\n") 
    for (const element of arr) { // iterator -> characters
        console.log(`element = ${element}`)
    }
}


console.log("\n\n\n") 
//     // another good use of for-of loop is to find a string size
{
    let language = "Javascript"; 
    let stringLength = 0; 
    for (const element of language) {
        stringLength++
    }
    console.log(`string length or size = ${stringLength}`)
    console.log("string length or size =", stringLength)
    console.log("string length or size = "+ stringLength)
}





console.log("\n\n\n") 
// for-in loop
{
    let data = {
        name: "nihar",
        professional: "student",
        degree: "B.C.A",
        age: 19
    }
    for (const key in data) {
        console.log(key)
    }
    for (const key in data) {
        const element = data[key];
        console.log(element)
    }
    
    for (const key in data) {
        const element = data[key];
        console.log(key,":", element)
    }
    console.log("\n")
    
    let arr = ["n",4,5,"f","he","efj",6,false,true,undefined]
    for (const values in arr) {
        console.log(values)
    }
    // if you are using the for-in loop for array that will print the indexes


    for (const values in arr) {
        const element = arr[values]
        console.log(element)
    }
    
}




console.log("\n\n\n") 







// practice
{
    // vowels counting in string
    let fullName = "Nihar Debnath";
    function vowels(name) {
        let count = 0;
        for (const element of name) {
            if (element === "i" || element === "I" || element === "a" || element === "A" || element === "E" || element === "e" || element === "o" || element === "O" || element === "u" || element === "U") {
                count++
            }
        }
        return count;
    }
    let numberOfVowels = vowels(fullName);
    console.log(`There are ${numberOfVowels} vowels in the name ${fullName}`)


    // vowels counting in string with arrow function
    const vowels2 = (str) => {
        let count = 0;
        for (const element of str) {
            if (element === "i" || element === "I" || element === "a" || element === "A" || element === "E" || element === "e" || element === "o" || element === "O" || element === "u" || element === "U") {
                count++
            }
        }
        return count;
    }
    let numberOfVowels2 = vowels2(fullName);
    console.log(`There are ${numberOfVowels2} vowels in the name ${fullName}`)
}