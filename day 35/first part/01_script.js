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

prom.then((a) =>{
    console.log(a)
})

// prom.then((a) =>{
//     console.log(a)
// }).catch((err) =>{
//     console.log(err)
// })
