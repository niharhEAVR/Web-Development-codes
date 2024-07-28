console.log("Hello World!")

console.log("Child")
// This lines not gonna work from your ide you have to type this line manually in the console section of the web window

// document.body.childNodes
// document.body.childNodes[0]   // this numbers are index values
// document.body.childNodes[1]
// document.body.childNodes[2]
// document.body.childNodes[3]


// document.body.childNodes[1].childNodes
// let cont = document.body.childNodes[1]
// cont.firstChild
// cont.firstElementChild

// cont.lastChild
// cont.lastElementChild

// ** this is the difference between the first child and first element child and same for last 


// cont.lastElementChild.style.backgroundColor = "beige"


console.log("Parent")
// let cont = document.body.childNodes[1]
// cont.lastElementChild.parentElement
// cont.lastElementChild.parentNode


console.log("All childrens")
// document.body.firstElementChild.children
// document.body.firstElementChild.children[0]
// document.body.firstElementChild.children[1]
// document.body.firstElementChild.children[4]
// document.body.firstElementChild.children[2].style.backgroundColor = "yellow"
// document.body.firstElementChild.children[2].nextElementSibling
// document.body.firstElementChild.children[2].previousElementSibling
// document.body.firstElementChild.children[0].previousSibling
// document.body.firstElementChild.children[0].previousSibling.previousSibling

// ** this is how we can get access of any childs