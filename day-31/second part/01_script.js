console.log("Event Handling")
let button1 = document.getElementById("btn")

button1.addEventListener("click", (e)=>{
    alert("Hello There.......")
    console.log(e)
    console.log(e.type)
    console.log(e.target)
    console.log(e.clientX)
    console.log(e.clientY)
    document.querySelector(".box").innerHTML = "Boom! Boom!"
})


document.getElementById("btn2").addEventListener("dblclick", ()=>{
    document.body.style.backgroundColor = "aqua"
}) // you have to double click it


document.getElementById("btn3").addEventListener("contextmenu", ()=>{
    document.body.style.backgroundColor = "tomato"
}) // you have to right click on the button


document.getElementById("btn4").addEventListener("keydown", (e)=>{
    console.log(e)
    console.log(e.key , e.keyCode)
}) // first open console on web window, second click on the button and type anything in your keyboard