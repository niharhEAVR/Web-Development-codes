let pendingPromise = new Promise((resolve,reject)=>{
    console.log("I am a promise")
})
console.log(pendingPromise) // the state will be on pendng

let fulfilledPromise = new Promise((resolve,reject)=>{
    console.log("I am another promise")
    resolve(919);
})    
console.log(fulfilledPromise) // the state will be on fulfilled and PromiseResult will be 919

let rejectedPromise = new Promise((resolve,reject)=>{
    console.log("I am Rejected promise")
    reject("Some error!");
})    
console.log(rejectedPromise) // the state will be on fulfilled and PromiseResult will be 919








let prom = new Promise((resolve, reject) =>{
        let a = Math.random()    
        if( a < 0.5){
                setTimeout(() => {
            reject("the random number is less than 0.5 thats why your code got rejected")    
        }, 2000);
    }else{
        setTimeout(() => {
            console.log("This will print first")    
            resolve("I will going to be printed at very last")
        }, 2000);
    }

})

console.log(prom)

prom.then((data) =>{
    console.log(data)    
})

prom.catch((err) =>{
    console.log(err)    
})

setTimeout(()=>{
    console.log(prom)    
},3000)






{
    const getPromise = ()=>{
        return new Promise((resolve,reject)=>{
            console.log("I am promise")
            resolve("succesfully resolved");
        })
    }    
    let promise = getPromise()
    promise.then((res)=>{
        console.log("Promise fullfilled: ",res)
    })
    console.log(promise)
}
{
    const getPromise = ()=>{
        return new Promise((resolve,reject)=>{
            console.log("I am promise")
            reject("Unwanted Network Error");
        })
    }    
    let promise = getPromise()
    promise.catch((error)=>{
        console.log("Promise rejected: ",error)
    })
    console.log(promise)

    // .catch is catching the error
}