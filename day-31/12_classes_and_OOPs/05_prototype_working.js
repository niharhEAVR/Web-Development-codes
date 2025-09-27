{
    // Prototypal inheritance
    const person = {
        greet: function () {
            console.log(`Hello, my name is ${this.name}`);
        }
    };

    // Child object that inherits from `person`
    const student = {
        name: "Alice",
        grade: "A"
    };

    // Set `person` as the prototype of `student`
    student.__proto__ = person;

    student.greet(); // Output: "Hello, my name is Alice"

    console.log(student)

}

{
    function nameString(firstName) {
        this.firstName = firstName
    }

    nameString.prototype.truelength = function () {
        let nameArray = [...this.firstName];
        let filteredNameArray = nameArray.filter(item => item !== ' ')
        let lengthOfName = 0;
        filteredNameArray.forEach(() => {
            lengthOfName++
        })
        console.log(lengthOfName)
        console.log(`The True Length of the Name is: ${lengthOfName}`)
    }

    let user1 = new nameString("nihar      ")
    let user2 = new nameString("     cooldude ")
    let user3 = new nameString("william Jones")

    user1.truelength()
    user2.truelength()
    user3.truelength()


    // to view the prototype that i have created here 
    console.log(nameString.prototype)
    console.log(user1.__proto__)
    console.dir(user1)
}


{
    
    let myName = "          nihar           "
    String.prototype.trueLength = function(){
        let nameArray = [...this];
        let filteredNameArray = nameArray.filter(item => item !== ' ')
        let lengthOfName = 0;
        filteredNameArray.forEach(() => {
            lengthOfName++
        })
        console.log(`The True Length: ${lengthOfName}`)
    }
    myName.trueLength()
    console.log(myName.__proto__)
}