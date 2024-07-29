let button = document.getElementById("btn")

// button.addEventListener("click", ()=>{
//     alert("Hello There.......")
// })

// button.addEventListener("click", ()=>{
//     document.querySelector(".box").innerHTML = "Boom! Boom!"
// })


// button.addEventListener("dblclick", ()=>{
//     document.body.style.backgroundColor = "aqua"
// }) // you have to double click it


// button.addEventListener("contextmenu", ()=>{
//     document.body.style.backgroundColor = "tomato"
// }) // you have to right click on the button


// button.addEventListener("keydown", (e)=>{
//     console.log(e)
// }) // first open console on web window, second click on the button and type anything in your keyboard


document.addEventListener("keydown", (e)=>{
    console.log(e.key , e.keyCode)
}) // no need to click on the button, just type
// keycode is deprecated, so we should not use keycode