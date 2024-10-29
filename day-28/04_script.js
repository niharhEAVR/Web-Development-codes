function car(carName) {
    console.log("hey nihar is this " + carName + " yours?")
}
car("toyota")


function arithmetic(x, y) {
    console.log("answer: ", (x + y))

}
arithmetic(
    a = 12,
    b = 30
)
function arithmetic2(x, y) {
    return (x + y)

}
result = arithmetic2(4, 5)
result2 = arithmetic2(3)
result3 = arithmetic2(2, 5)
console.log("The result is: ", result)
console.log("The result is: ", result2)
console.log("The result is: ", result3)


function arithmetic3(x, y, z = 3) {
    // this z is default parameter
    return (x + y + z)
}
result4 = arithmetic3(4, 5)
console.log("The result is: ", result4)



// arrow function
const func2 = (x) => {
    console.log(x)
}
func2("I am an arrow function")
{
    const sum = (a, b) => {
        return a + b
    }
    console.log(sum)
    console.log(typeof sum)
    console.log(sum(2, 3))
}





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