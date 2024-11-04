let start = document.querySelector('#btn1')
start.addEventListener('click', () => {

    let printing = setInterval(() => {
        console.log(`Nihar Debnath ${new Date().toLocaleTimeString()}`)
    }, 1000)


    let countdownDuration = 5;
    let countdownElement = document.getElementById('countdown');

    function updateCountdown() {
        if (countdownDuration >= 0) {
            countdownElement.textContent = countdownDuration;
            countdownDuration--;
        } else {
            clearInterval(timer);
        }
    }
    let timer = setInterval(updateCountdown, 1000);

    let heading = document.querySelector('h1')

    let stopTimeout = setTimeout(() => {
        heading.innerText = 'Why you didnt clicked on the stop button!'
    }, 6000)

    let button = document.querySelector('#btn2')

    button.addEventListener('click', () => {
        clearTimeout(stopTimeout)
        clearInterval(timer);
        clearInterval(printing);
    })
})