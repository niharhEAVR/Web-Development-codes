function changeColor(color){
    return () => {
        document.body.style.backgroundColor = `${color}`
    }
}


document.getElementById('orange').onclick = changeColor('orange')
document.getElementById('cyan').onclick = changeColor('blue')

console.log(changeColor()) // as the event handles needs function this is how we can access it, using return keyword we can return a whole function