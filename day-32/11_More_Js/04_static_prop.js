class User {
    constructor(username) {
        this.username = username
    }

    login() {
        console.log(`login as = ${this.username}`)
    }
    static createID() {
        return `123`
    }
}

class Person extends User {
    constructor(username) {
        super(username)
    }
}

const cooldude = new Person('cooldude')
cooldude.login()
console.log(cooldude.username)
// console.log(cooldude.createID()) // static is actually stops that particular function to accessable for parent class or inherited child class also


console.log(User.createID()) // but we can access the static function directly from the class
console.log(Person.createID()) // and we can also access the static function from the inherited class;
