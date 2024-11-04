document.querySelector(".child").addEventListener("click", ()=>{
    alert("You Clicked on the child")
})

document.querySelector(".childContainer").addEventListener("click", ()=>{
    alert("** You Clicked on the childContainer ** or, As class child is inside the class childContainer thats why chlidContainer also got clicked")
})
document.querySelector(".container").addEventListener("click", ()=>{
    alert("** You Clicked on the container ** or, ** As class childContainer is inside the class container thats why container also got clicked ** or, As class child and the class childContainer is inside the class container thats why container also got clicked, (In other way you can think that you live in india that means you already living in Asia and that means you are also living in Earth) --> This is called Event Bubbling")
})