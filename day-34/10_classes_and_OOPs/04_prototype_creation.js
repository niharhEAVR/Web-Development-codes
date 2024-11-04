{
    let myArray = [1,2,3,4,5]
    let myObject = {
        none: "none",
        none2: function(){
            console.log(this.none)
        }
    }
    console.log(myArray)
    console.log(myObject)

    Object.prototype.myOwnCreatedPrototypeOnGlobalObject = function(){
        console.log(this)
    }
    myArray.myOwnCreatedPrototypeOnGlobalObject()
    myObject.myOwnCreatedPrototypeOnGlobalObject()
    
    // now if you check on the console you will see that our own created prototye was attached on the prototype menu


    Array.prototype.myOwnCreatedPrototypeOnArray = function(){
        console.log(this)
    }
    myArray.myOwnCreatedPrototypeOnArray()
    myObject.myOwnCreatedPrototypeOnArray() // here you will see that we cant access the myOwnCreatedPrototypeOnArray() in our object because we created that prototype in array not in global object

}