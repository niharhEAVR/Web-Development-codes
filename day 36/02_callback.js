// {
//     // Synchronous callback
//     function sum(a,b) {
//         console.log("a+b = ",a+b)
//     }
//     function cal(a,b,callback) {
//         callback(a,b)
//     }
//     cal(2,3,sum)
// }
// {
//     // Asynchronous callback
//     let hi = ()=>{
//         console.log("Hi....")
//     }
//     setTimeout(hi,3000)
// }




// callback hell
{
    setTimeout(function () {
        console.log("hi");
        setTimeout(function () {
            console.log("hello");
            setTimeout(function () { 
                console.log("hello there");
            }, 5000);
        }, 3000);
    }, 1000);
}
  