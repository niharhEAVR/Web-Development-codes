function getRandomColor() {
    let val1 = Math.ceil(0 + Math.random() * 255);
    let val2 = Math.ceil(0 + Math.random() * 255);
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`
} // this is created for random color generator

let a = setInterval(() => {
    document.querySelector(".container").style.background = getRandomColor();
}, 1000);  // this 1000 means its milliseconds which is equal to 1 second // this use for repetative work

let a2 = setTimeout(() => {
    document.querySelector(".box").style.background = getRandomColor();
}, 5000); // this 5000 means its milliseconds which is equal to 5 second // this works only one time