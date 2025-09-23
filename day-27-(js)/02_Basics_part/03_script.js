// in this code we are focusing on singleton object

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

const newObj = Object.assign({}, tinderUser, meme) // this actually combining both the objects , but in modern era we do not use this, instead use spread method
console.log(newObj)

const spreadThenAddObj = {...tinderUser , ...meme} // and this is the method we will gonna use 90% of the time in our coding journey // that three dots actually spreads the key value pairs
console.log(spreadThenAddObj)

console.log("\n")

console.log(Object.keys(newObj))
console.log(Object.values(newObj))
console.log(Object.entries(newObj))
console.log(newObj.hasOwnProperty('name'))


const course = {
    coursename : "Rust",
    courseFees : 1999,
    courseInstructor : "Nihar"
}
const {courseFees : Fees} = course // this is how we can destructure a object, means that we can change the name of our object keys from this way
console.log(Fees.toLocaleString("en-In"))
console.log("this fees is not an objects, its a normal variable which stores the values of courseFees from the course object")