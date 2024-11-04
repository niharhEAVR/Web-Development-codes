class user{
    constructor(username){
        this.username = username
    }
    login(){
        return `login as - ${this.username}`
    }
}
 
class student extends user{
    constructor(username, email, password){
        super(username) // this is how we can call one value from the parent class, for classes in javascript we dont need to use the call() method.
        this.email = email
        this.password = password
        // after ES6 everything becomes smooth
    }
    buyCourse(){
        console.log(`A new course is bought by ${this.username}`)
    }
}

const student1 = new student("cooldude", "noocooldude@name.com", "no-cooldude")
const user1 = new user("sakalaka")

console.log(student1.login()) // as student is inheriting the user thats why we can access the login()
student1.buyCourse()

console.log(student1) // watch the print of this in console, then you will get clarification

console.log(user1.login())
console.log(user1)

console.log(student1 === user1)

console.log(student1 instanceof student) // this actually shows that the student1 are from the student class or not
console.log(student1 instanceof user) // and here student class is inherited from the user class thats why it is true
console.log(user1 instanceof user)
console.log(user1 instanceof student)

user1.buyCourse() //  look we cant access the child object function