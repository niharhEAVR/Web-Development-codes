// is this code we are focusing on singleton object

const tinderUser = new Object() // this declaration is a singleton declaration object

tinderUser.id = 3001223008
tinderUser.name = "nihar"

tinderUser.personalInfo = {
    age : 19,
    address : "shantipur"
}
console.log(tinderUser)
console.log(tinderUser.personalInfo.age)


const meme = {
    hyperName : "hyper ninja",
    hyperId : 233001010482,
    hyperCluster : "Modern",
    hyperMode : "Active"
}

const newObj = Object.assign({}, tinderUser, meme) // this actually combining both the objects , but in modern era we do not use this, instead e use spread method
console.log(newObj)

const spreadThenAddObj = {...tinderUser , ...meme} // and this is the method we will gonna use 90% of the time in our coding journey // that three dots actually spreads the key value pairs
console.log(spreadThenAddObj)