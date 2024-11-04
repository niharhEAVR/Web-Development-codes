alert("Hello World! first javascript program")

console.log("Hello Nihar!")
console.log("Welcome")

var a = prompt("Enter any number: ")
console.log("Your entered number is: " + a)


var b = confirm("JavaScript was invented by Brendan Eich in 1995, if yes then click on ok or if no then click cencel")

console.log("the confirmation value is:",b)

if(b){
    console.log("Welldone, you are right")
}else{
    console.log("Sorry, you are wrong")
}

document.title = "JavaSript Page"
// this will change the title of the page 

document.body.style.backgroundColor = "red" 
// why the above code is not read by web page 
// because we added the script tag inside the head tag
// if you are using DOM manypulation then its better to add the script tag a very last of the body tag.
// this gives the body to load first then dom can do opeations