let darkLight = document.getElementById("darkLight")
let currentMode = "light"

darkLight.addEventListener("click", ()=>{
    if(currentMode === "light"){
        currentMode = "dark"
        document.body.style.backgroundColor = "#202020"
    }else{
        currentMode = "light"
        document.body.style.backgroundColor = "#ffff"
    }
    console.log(currentMode)
})

// what a great concept
// dry run it by your self