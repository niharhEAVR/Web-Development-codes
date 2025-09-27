// Class name's first letter always need to be a Capital letter, It is an universal rule

class User {
    constructor(username) {
        this.username = username
    }
    login() {
        return `login as - ${this.username}`
    }
}

class Student extends User {
    constructor(username, email, password) {
        super(username) // this is how we can call one value from the parent class, for classes in javascript we dont need to use the call() method.
        this.email = email
        this.password = password
        // after ES6 everything becomes smooth
    }
    buyCourse() {
        console.log(`A new course is bought by ${this.username}`)
    }
}

const student1 = new Student("cooldude", "noocooldude@name.com", "no-cooldude")
const user1 = new User("sakalaka")

console.log(student1.login()) // as Student is inheriting the User thats why we can access the login()
student1.buyCourse()

console.log(student1) // watch the print of this in console, then you will get clarification

console.log(user1.login())
console.log(user1)

console.log(student1 === user1)

console.log(student1 instanceof Student) // this actually shows that the student1 are from the Student class or not
console.log(student1 instanceof User) // and here Student class is inherited from the User class thats why it is true
console.log(user1 instanceof User)
console.log(user1 instanceof Student)

user1.buyCourse() //  look we cant access the child object function
// because base class dont know who is derived class