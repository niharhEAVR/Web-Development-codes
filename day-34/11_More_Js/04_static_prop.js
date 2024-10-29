class user{
    constructor(username){
        this.username = username
    }

    login(){
        console.log(`login as = ${this.username}`)
    }
    static createID(){
        return `123`
    }
}

const cooldude = new user('cooldude')
console.log(cooldude.createID()) // static is actually stops that particular function to accessable for parent class or inherited child class also