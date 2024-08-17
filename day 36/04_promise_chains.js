{
    // Normal method
    function getData1() {
        return new Promise((resolve,reject) => setTimeout(()=>{
            console.log("Data-1")
            resolve("Success")
        }, 3000));
    }
    function getData2() {
        return new Promise((resolve,reject) => setTimeout(()=>{
            console.log("Data-2")
            resolve("Success")
        }, 3000));
    }
    
    console.log("featching Data-1");
    getData1().then(() =>{
        console.log("featching Data-2");
        getData2().then( () =>{})
    })
}

{
    // Advanced method
    // function getData(ms) {
    //     return new Promise((resolve,reject) => setTimeout(resolve, ms));
    // }
    
    // console.log("featching Data-1");
    // getData(1000).then( () =>{
    //     console.log("Data-1");
    //     console.log("featching Data-2");
    //     return getData(3000);
    // }).then( () =>{
    //     console.log("Data-2");
    //     console.log("featching Data-3");
    //     return getData(5000);
    // }).then( () =>{
    //     console.log("Data-3");
    // });
}