async function getData(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(404 + " Resolved and data succesfully loaded")
        }, 5000);
    })
}

async function main(){
    setTimeout(() => {
        console.log("Starting of Task 1")
    }, 1000);
    setTimeout(() => {
        console.log("Running...")
    }, 2000);
    setTimeout(() => {
        console.log("Loading Data")
    }, 3000);


    let data = await getData()

    console.log(data)


    setTimeout(() => {
        console.log("Processing Data")
    }, 1000);
    setTimeout(() => {
        console.log("End of Task 1")
    }, 2000);
    
}

main()