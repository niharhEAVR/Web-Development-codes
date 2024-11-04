{
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            let flag = Math.random() > 0.5;
            if (flag) {
                resolve({ username: "william", gmail: "william.offical@mail.com" })
            } else {
                reject('ERROR: login failed')
            }
        }, 1000)
    });

    let consumeMyPromise = async () => {
        try {
            const response = await myPromise   // here if we dont store our promise in a variable then we have to call a function and then return the promise // in downward there is an return promise example
            console.log("Promise_1:",response);
        } catch (error) {
            console.log("Promise_1:",error);
        }
    }
    consumeMyPromise()
}


{
    function ourPromise(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let flag = Math.random() > 0.5;
                if (flag) {
                    resolve({ username: "william", gmail: "william.offical@mail.com" })
                } else {
                    reject('ERROR: login failed')
                }
            }, 1000)
        });
    }

    let consumeMyPromise = async () => {
        try {
            const response = await ourPromise()
            console.log("Promise_2:",response);
        } catch (error) {
            console.log("Promise_2:",error);
        }
    }
    consumeMyPromise()
}