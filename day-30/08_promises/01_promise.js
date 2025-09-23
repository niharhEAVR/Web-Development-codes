new Promise(function (resolve, reject) {
    setTimeout(() => {
        const success = Math.random() > 0.5;
        console.log(success)
        if (success) {
            console.log("async task is complete")
            resolve({
                name:"nihar",
                age:19,
                id: [29,'@',56],
                date: new Date().toLocaleDateString()
            })
        } else {
            reject('your promise rejected')
        }
    }, 5000)
})
.then(data => {
    console.log("Success:", data)
    console.log(`Id is : ${data.id.join('')}`)
    return data.date; // if we return anything from this '.then' then the value will be trasnfer to the next '.then' , there we can use the value. Its called chaining method
})
.then(data => {
    console.log(`Todays date: ${data}`)
})
.catch(error => console.log("Error is:", error))