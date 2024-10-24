// this is a another method of generating random colors

//generate a random color

const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
        console.log(color)
    }
    return color;
};

let returnValueFromRandomColor = randomColor() // this line is optional
console.log(`The color is ${returnValueFromRandomColor}`) // this line is optional

let stopInterval;// globally declared because of scope

console.log(!stopInterval) // this line is optional
console.log(!null) // this line is optional

const startChangingColor = function () {
    if (!stopInterval) {
        stopInterval = setInterval(changeBgColor, 1000);
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = function () {
    clearInterval(stopInterval);
    stopInterval = null;
};

document.querySelector('#btnStart').addEventListener('click', startChangingColor);

document.querySelector('#btnStop').addEventListener('click', stopChangingColor);



// Why this code is better?

// 1.  Has a clear separation between color generation, start/stop logic, and event listener attachment, which is good for code readability and maintainability.

// 2. Clear separation of logic with named functions for starting and stopping the color change process.

// 3. For readability, maintainability, and separation of concerns, this is a better approach, especially if the logic gets more complex in the future.

// i can still use my created random color generator, but what is the difference is that all the functionality have its own function which is good for long run and makes the difference between you and any random web developer



// Yes, the use of `stopInterval` in this code serves an important purpose for managing the 'start' and 'stop' of the background color change process. Let's break it down:

// Purpose of `stopInterval` and its Checks:

// 1. 'Initial Declaration':

//    let stopInterval;
//    `stopInterval` is declared at the beginning but not assigned any value, so it's `undefined` by default. It will store the ID returned by `setInterval()`, which is necessary to stop the interval later using `clearInterval()`.

// 2. 'Check Inside the `startChangingColor()` Function':

//    if (!stopInterval) {
//        stopInterval = setInterval(changeBgColor, 1000);
//    }

//    Here, the code checks if `stopInterval` is 'falsy' (i.e., `undefined` or `null`). If no interval has been started yet (since `stopInterval` is `undefined`), the `setInterval()` function is called, and its ID is stored in `stopInterval`.

//    - 'Reason for the Check': 
//      - This prevents multiple intervals from being created when the user clicks the "Start" button multiple times. Without this check, every click would start a new interval, and the background would change at an increasingly faster rate, since multiple intervals would be running in parallel.
   
// 3. 'Setting `stopInterval` to `null` on Stopping':

//    clearInterval(stopInterval);
//    stopInterval = null;

//    When the "Stop" button is clicked, `clearInterval(stopInterval)` stops the currently running interval. After that, `stopInterval` is set to `null`.

//    - 'Reason for Setting `stopInterval` to `null`':
//      - This ensures that the next time the "Start" button is clicked, the check (`if (!stopInterval)`) will pass and a new interval will be created. Setting it to `null` effectively resets the system, allowing for future starts and stops.

// Summary:
// - '`stopInterval` is used to keep track of the interval' that changes the background color.
// - The '`if (!stopInterval)` check prevents multiple intervals' from running at the same time.
// - Setting `stopInterval` to '`null` after stopping ensures the code can safely start a new interval' the next time the start button is clicked.