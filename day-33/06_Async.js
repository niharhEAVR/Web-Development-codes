function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
{
    async function solve() {
        console.log("featching Data-1");
        await setTimeoutPromisified(3000);
        console.log("Data-1");
        console.log("featching Data-2");
        await setTimeoutPromisified(3000);
        console.log("Data-2");
        console.log("featching Data-3");
        await setTimeoutPromisified(5000);
        console.log("Data-3");
    }
    solve();
}
{
    //using IIFE
    // (async function (){
    //     console.log("featching Data-1");
    //     await setTimeoutPromisified(3000);
    //     console.log("Data-1");
    //     console.log("featching Data-2");
    //     await setTimeoutPromisified(3000);
    //     console.log("Data-2");
    //     console.log("featching Data-3");
    //     await setTimeoutPromisified(5000);
    //     console.log("Data-3");
    // })();
    // see here we havnt called any function
}





// async function getData(miliSeconds){
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             resolve(202 + " Resolved and data succesfully loaded")
//         }, miliSeconds);
//     })
// }
// async function main(){
//     setTimeout(() => {
//         console.log("Starting of Task 1")
//     }, 1000);
//     setTimeout(() => {
//         console.log("Running...")
//     }, 2000);
//     setTimeout(() => {
//         console.log("Loading Data")
//     }, 3000);


//     let data = await getData(6000)

//     console.log(data)


//     setTimeout(() => {
//         console.log("Processing Data")
//     },1000);
//     setTimeout(() => {
//         console.log("End of Task 1")
//     },3000);
    
// }
// main()