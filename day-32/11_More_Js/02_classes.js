// Classes in javascript came after ES6

class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    showEmail(){
        return `${this.email}`
    }
    showPassword(){
        return `${this.password}@21`
    }

}

const user1 = new user("name", "nooname@name.com", "no-name")

console.log(user1.showPassword())
console.log(user1.showEmail())
console.log(user1) // if you go to the console on developer tool then you get to see that the showPassword and showEmail automatically created inside the user1 object
// thats why class is better than prototype