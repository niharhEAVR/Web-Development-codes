// Object literal is nothing but the normal object.
let userInfo = {
    name: "Cool Dude",
    age: 34,
    followers: 1965,
    email: "cooldude123@example.com",

    contactMe: function(){
        console.log(`if you wanna contact me for sponsers here is my email address: ${this.email}`)
    },


    thisMeaning: function(){
        console.log(`so the this is nothing but your own created object.`)
        console.log(this)
    }
}

console.log(userInfo.contactMe())
console.log(userInfo.thisMeaning())
