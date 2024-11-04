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
    for (const values in arr) {
        const element = arr[values]
        console.log(element)
    }
    
}




console.log("\n\n\n") 

{
    // Returns a random integer from 0 to 9
    let randomNumber = Math.floor(Math.random()*10);
    console.log(`The random number is: ${randomNumber}`);
}
{
    // Returns a random integer from 1 to 100:
    let randomNumber = Math.floor(Math.random()*100)+1;
    console.log(`The random number is: ${randomNumber}`);
}
{
    // Returns a random integer from 1 to 101:
    let randomNumber = Math.floor(Math.random()*101)+1;
    console.log(`The random number is: ${randomNumber}`);
    
}
// this is how you can controll the Math.random function






// guessing number game
{
    // let randomNumber = Math.floor(Math.random()*10);
    // let guessedNumber = prompt("Guess the number: ");
    // while( randomNumber!= guessedNumber) // prompt take any number in string format so always use (!=) not this (!==)
    // {
    //     guessedNumber = prompt("Wrong! Guess again: ");
    // }
    // console.log("You are correct.");
}