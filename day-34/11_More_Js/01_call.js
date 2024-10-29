function setUserName(username) {
    this.username = username
}

function creatUser(username, email, password) {
    
    setUserName.call(this, username)

    this.email = email
    this.password = password
}

const user1 = new creatUser("cooldude", "cooldude@no-mail.com", "cooldude69")

const user2 = new creatUser("cluster", "cluster@cluster-mail.com", "cluster919")

console.log(user1)
console.log(user2)

// The line setUserName.call(this, username) calls the setUserName function and explicitly sets this to refer to the current instance of creatUser. This means the username property will be set on the new user object being created.