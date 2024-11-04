let start = document.querySelector('#btnStart')
start.addEventListener('click',()=>{
    function randomColorGenerator(){
        let color1 = Math.floor((Math.random()*255)+1)
        let color2 = Math.floor((Math.random()*255)+1)
        let color3 = Math.floor((Math.random()*255)+1)
        return `rgb(${color1}, ${color2}, ${color3})`
    }

    let stopColors = setInterval(()=>{
        document.querySelector('body').style.background = randomColorGenerator()
    },1000)

    let stop = document.querySelector('#btnStop')
    stop.addEventListener('click',()=>{
        clearInterval(stopColors);
    })
})


// do you know whats the drawback here is if you click on the start button multiple time the the color changing speed will go insanely high
// because how many time you will click on the start button, that many times the setInterval will get called