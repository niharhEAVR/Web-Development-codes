document.querySelector(".child").addEventListener("click", (e)=>{
    e.stopPropagation() // propogation stops the bubbling
    alert("You Clicked on the child")
})

document.querySelector(".childContainer").addEventListener("click", (e)=>{
    e.stopPropagation()
    alert("You Clicked on the childContainer")
})
document.querySelector(".container").addEventListener("click", (e)=>{
    alert("You Clicked on the container")
})