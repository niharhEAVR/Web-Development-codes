let heading = document.querySelector('.heading')
console.log(heading.innerHTML)
console.log(heading.innerText)
console.log(heading.textContent)
// there are the difference between innerHTML, innerText, textContent


{let anotherHeading = document.querySelector('h1')
console.log(anotherHeading)} // querySelector only selects the first element 
{let anotherHeading = document.querySelectorAll('h1')
console.log(anotherHeading)} // this selects all the elements

// querySelectorAll give values in NodeList format
// and getElementByClassName give values in HTMLCollection format

// NodeList and HTMLCollection both are Arrays but there is slight difference is that they dont have all the functionality of array
// example => they both dont have mar, filter, reduce functions
// but NodeList have forEach loop

// to check this open developer tool then click on the small arrow beside the NodeList and then click on [[Prototype]]: NodeList,, then you will get to see all the properties

let myUl = document.getElementsByClassName('listItems')
console.log(myUl)
myUl[0].style.color = 'red'

// how can i use forEach loop in HTMLCollection
// first convert the HTMLCollection into array then use all the arrray properties
let arrayMethods = Array.from(myUl) // here we converted the HTMLCollection into an array then stored in a variable
console.log(arrayMethods) 
