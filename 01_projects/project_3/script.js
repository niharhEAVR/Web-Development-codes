let clock = document.querySelector('#clock')


setInterval(()=>{
    let date = new Date()
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString()
},1000)

// setInterval has two parameters one is for function and another one is for time in miliseconds