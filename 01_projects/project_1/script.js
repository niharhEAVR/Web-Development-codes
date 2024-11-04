const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

document.querySelector('.container').style.backgroundColor = '#212121'

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e) // click on the small boxes then you can see outputs
        console.log(e.target)

        switch (e.target.id) {
            case 'gray':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;
            default:
                body.style.backgroundColor = e.target.id
                break;
        }
    })
})

let undoChanges = document.querySelector('#undo')
undoChanges.addEventListener('click', (e)=>{
    body.style.backgroundColor = '#212121'
})