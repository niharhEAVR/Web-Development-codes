const student = {
    name: "Nihar Debnath",
    cgpa: 7.1,
    printCGPA: function () {
        console.log(`total cgpa: ${this.cgpa}`) // student.cgpa
    }
}

console.log(student)
console.log(student.cgpa)
console.log(student.printCGPA()) // this line must be showing undefined in the browser console, mannually run the command and you get to see that why its happening
console.log(student.printCGPA)
console.log(student.constructor) // this is prototype object's property, there is many more


//There is another shortcut method to create a function inside a object
const employee = {
    tax : "30%",

    // calTax: function (){
    //     console.log(`Tax rate is ${this.tax}`)
    // }
    // Instead of this we can do this down
    calTax(){
        console.log(`Tax rate is ${this.tax}`)
    },
    random: "random"
}
console.log(employee.calTax())



const niharDebnath = {
    name: "nihar",
    salary: 20000
}
const harshVardhan = {
    name: "harsh",
    salary: 30000
}
niharDebnath.__proto__ = employee
harshVardhan.__proto__ = employee
console.log(niharDebnath)
console.log(niharDebnath.calTax())
console.log(niharDebnath.random)
console.log(harshVardhan)







const tax = {
    calTax(){
        console.log("Tax rate is 30%")
    }
}
const mannu = {
    name: "Mannu Raj",
    salary: 10000,
    calTax(){
        console.log("Tax rate is 5%")
    }
}
mannu.__proto__ = tax
console.log(mannu)
console.log(mannu.calTax()) // 5% will be printed , because of the own object function same as prototype function