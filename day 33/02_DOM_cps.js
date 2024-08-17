console.log("\*Child\*")

console.log(document.body.childNodes)
// console.log(document.body.childNodes[0])   // this numbers are index values
// console.log(document.body.childNodes[1])
// console.log(document.body.childNodes[2])
// console.log(document.body.childNodes[3])
// console.log(document.body.childNodes[4])
// console.log(document.body.childNodes[5])
// console.log(document.body.childNodes[3].childNodes[2])
// console.log(document.body.childNodes[3].childNodes[2].childNodes)


let cont = document.body.childNodes[3]
console.log(cont.firstChild)
console.log(cont.firstElementChild)
console.log(cont.lastChild)
console.log(cont.lastElementChild)
// ** this is the difference between the first child and first element child and same for last 

// cont.lastElementChild.style.backgroundColor = "beige" //if you uncomment this then you will get to see that in developer tool console window there is inline css is adding instantly




console.log("\*Parent\*")

let cont2 = document.body.childNodes[3]
console.log(cont2.lastElementChild.parentElement)
console.log(cont2.lastElementChild.parentNode)
// console.log(cont2.lastElementChild.parentElement.parentElement)
console.log(cont2.parentElement) //short form of the upline





console.log("\*All childrens\*")

console.log(document.body.childNodes[3].children)
console.log(document.body.childNodes[3].children[0])
console.log(document.body.childNodes[3].children[1])
console.log(document.body.childNodes[3].children[4])
console.log(document.body.children)
document.body.childNodes[3].children[2].style.backgroundColor = "yellow"

console.log(document.body.childNodes[3].children[2].nextElementSibling)
console.log(document.body.childNodes[3].children[2].previousElementSibling)
console.log(document.body.childNodes[3].children[0].previousSibling)
console.log(document.body.childNodes[3].children[0].previousSibling.previousSibling)
console.log(document.body.childNodes[3].children[0].previousSibling.previousSibling.previousSibling)

// ** this is how we can get access of any childs