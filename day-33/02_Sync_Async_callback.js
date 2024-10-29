{
    // Synchronous callback
    function sum(a,b) {
        console.log("a+b = ",a+b)
    }
    function cal(a,b,callback) {
        callback(a,b)
    }
    cal(2,3,sum)
}
{
    // Asynchronous callback
    let hi = ()=>{
        console.log("Hi....")
    }
    setTimeout(hi,3000)
}