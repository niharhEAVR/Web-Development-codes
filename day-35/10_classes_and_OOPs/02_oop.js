{
    // 1. once you run the code you will get to see the Global Object of our Machine
    function globalObject(){
        return this
    }
    console.log(globalObject())
}

{
    // 2. after the run first scope now you will get to see that in second global object there is 3 key-value pairs got appended at last 

    console.log("\n\n")
    function User(username, loginCount, isLoggedIn) {
        this.username = username // 3. this.username is used for new object key  creating, and the only username is used for the value creation or value storing in the object key
        this.loginCount = loginCount
        this.isLoggedIn = isLoggedIn
        return this
    } // 4. dont confuse here check the key features of (this) keyword on 02_notes.md 


    // 5. here we are printing out global object 2 times
    let userOne = User("wolverine", 39, false)
    console.log(userOne)  // 6. first time you see that the 3 key-value pairs have wolverine name

    console.log("\n\n")
    
    let userTwo = User("deadpool", 56, true)
    console.log(userOne) // 7. i am still printing userOne But in here you will see that the 3 key-value pairs now have deadpool. ( wolverine value got overwrited )
    // 8. and thats why we need (new) keyword to make new objects for indivudual users
}

{
    console.log("\n\n")
    function User2(username, loginCount, isLoggedIn) {
        this.username = username
        this.loginCount = loginCount
        this.isLoggedIn = isLoggedIn
        this.greetings = function(){
            console.log(`Welcome ${this.username}`)
        }
        
        // here you will get to notice that we are not returning any (this)
        // because here we are creating new objects, not appending the key-value pairs with global object 
    }
    
    let userOne = new User2("wolverine", 39, false)
    console.log(userOne)
    console.log(userOne.greetings())
    console.log("\n\n")
    let userTwo = new User2("deadpool", 56, true)
    console.log(userTwo)
    console.log(userTwo.greetings())

    console.log(userOne.constructor)
}

