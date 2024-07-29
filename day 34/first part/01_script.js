// **This lines will not gonna work in your ide, you have to run it in console section of your web window

// console.log(document.querySelector(".container").innerHTML)  // ** this will show error that it cant read

// document.querySelector(".container").innerHTML
// document.querySelector(".container").innerText
// document.querySelector(".box").innerHTML

// ** innerhtml provides that inside elements of that container but outerhtml will provide that container and inside elements all togather

// document.querySelector(".container").outerHTML

// document.querySelector(".container").tagName
// document.body.firstElementChild.firstChild.nodeName

// document.querySelector(".container").hidden
// **the upper line is asking the html that the container is hidden or not if not it will give false
// document.querySelector(".container").hidden = "true"
// **the upper line is forcing the html to hide the container element, it will look like this <div class="container" hidden>…</div>

// ** i can change the text inside and inner html
// document.querySelector(".box").innerHTML
// document.querySelector(".box").innerHTML = "Hey my name is nihar"

//document.querySelector(".box").hasAttribute("id")
//document.body.firstElementChild.children[1].hasAttribute("id")
// document.body.firstElementChild.children[1].setAttribute("id" , "circle")
// document.body.firstElementChild.children[1].getAttribute("id")
// document.body.firstElementChild.children[1].removeAttribute("id")


// **The ultimate power of a web developer
// document.designMode = "on"
// this upper will change any website pages content, thats why dont believe on screenshots

// document.body.firstElementChild.children[2].dataset
// document.body.firstElementChild.children[3].dataset

