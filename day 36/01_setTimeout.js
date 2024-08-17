// {
//     console.log("First")
//     console.log("Second")
//     function hello() {
//         console.log("Hello World!")
//     }
//     setTimeout(hello,2000)
//     console.log("Third")
//     console.log("Fourth")
// }
{
    console.log("First")
    console.log("Second")
    setTimeout(()=>{
        console.log("Hello World!")
    },2000)
    console.log("Third")
    console.log("Fourth")
}