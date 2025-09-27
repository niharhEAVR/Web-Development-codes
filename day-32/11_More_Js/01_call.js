// As we learned before that the function constructor creates a new object and sets this to refer to that new object with its own key-pair vlaues. But what if we want to use a function inside the function constructor to set some properties? We can use call() method to achieve that.

function setUserName(username) {
    this.username = username
}

function createUser(username, email, password) {
    
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const user1 = new createUser("cooldude", "cooldude@cool-mail.com", "cooldude69")

const user2 = new createUser("cluster", "cluster@cluster-mail.com", "cluster919")

const user3 = new createUser("noname", "noname@no-mail.com", "noname69")

console.log(user1)
console.log(user1.username + "\n")
console.log(user2)

// The line setUserName.call(this, username) calls the setUserName function and explicitly sets this to refer to the current instance of createUser. This means the username property will be set on the new user object being created.