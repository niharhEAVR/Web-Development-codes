console.log("Hello World!")

let boxes = document.getElementsByClassName("box")
console.log(boxes)

boxes[2].style.backgroundColor = "cyan" // 2 is a index value

document.getElementById("box5").style.backgroundColor = "darkgreen"


document.querySelector(".box").style.backgroundColor = "darkblue" // this method will only select the first box or child of the container or parent //this method work as a inline css



console.log(document.querySelectorAll(".box")) // this all method will include the id box or child also // this will give an html array collection
// to change their existing property we have to use foreach loop for array
// because this is a html collection array
document.querySelectorAll(".box").forEach (element =>{
    element.style.color = "white"
    element.style.fontSize = '20px'
})


console.log(document.getElementsByTagName("div"))


element2 = document.getElementsByTagName("div") 
console.log(element2[5].matches("#box5"))
// this will check the id is with wit box or not
console.log(element2[6].matches("#box5"))


// closest property will find the relation of the closest tag
console.log(element2[2])
console.log(element2[2].closest(".box")) // closest will "return itself" (i.e., the element it’s called on) if it matches the selector
console.log(element2[2].closest(".container"))
console.log(element2[2].closest("body"))
console.log(element2[2].closest("html"))



console.log(document.querySelector(".container").contains(element2[2]))
// we stored all the div elements in element2 variavble, now this thing will check that element2[2] this index value is inside of the html collection array ot not 
console.log(document.querySelector(".container").contains(element2[9]))
console.log(document.querySelector(".container").contains(document.querySelector("body")))
console.log(document.querySelector(".container").contains(document.querySelector("html")))
console.log(document.querySelector("body").contains(document.querySelector(".container")))