// document.querySelector(".container").innerHTML
// document.querySelector(".container").innerText
// document.querySelector(".box").innerHTML

// ** innerhtml provides that inside elements of that container but outerhtml will provide that container with inside elements all togather

// document.querySelector(".container").outerHTML


// -----------------------------------------------


// document.querySelector(".container").tagName
// document.body.firstElementChild.firstChild.nodeName
// ** nodename and tagname is almost same


// -----------------------------------------------


// document.querySelector(".container").hidden

// **the upper line is asking the html that the container is hidden or not, if not it will give 'false' or if yes it will ptint 'true'

// document.querySelector(".container").hidden = "true"

// **the upper line is forcing the html to hide the container element, it will look like this <div class="container" hidden>…</div>


// -------------------------------------------------


// ** i can change the text inside and inner html
// document.querySelector(".box").innerHTML
// document.querySelector(".box").innerHTML = "Hey my name is nihar"


// ---------------------------------------------------


// document.body.querySelector(".box").getAttribute("id")
// document.body.querySelector(".box").getAttribute("name")
// document.body.querySelector(".box").getAttribute("class")
// document.body.querySelector(".box").setAttribute("name","ryzen")
// ** the upline changes the name from boxer to ryzen

//document.body.firstElementChild.children[1].hasAttribute("id")
// document.querySelector(".box").hasAttribute("id")
// document.body.firstElementChild.children[1].removeAttribute("id")


//-----------------------------------------------------


{
    let newButton = document.createElement("button");
    newButton.innerHTML = "Insertion! <b><i>it has been inserted by me</i></b>";
    newButton.setAttribute("class", "battu");

    document.querySelector(".container").append(newButton); // append will insert the tag inside that container element , but at the end
    // document.querySelector(".container").prepend(newButton); // prepend will insert the tag inside that container element , but at the top
    
    // document.querySelector(".container").before(newButton); // before will insert the tag before the container element
    // document.querySelector(".container").after(newButton); // after will insert the tag after the container element
}
{
    // ** just like insertion we can also delete any element
    // document.querySelector(".battu").remove();
    // ** remember that remove is a function
}


// ----------------------------------------------------


// document.body.firstElementChild.setAttribute("class","rectangle") // this line will overwrite the container class 
// document.body.firstElementChild.classList.add("rectangle") // this line will add another class beside the container class
// document.body.firstElementChild.classList.remove("rectangle") // this line will remove that extra class beside the container class


//-------------------------------------------------------


// ** The ultimate power of a web developer
// document.designMode = "on"
// this upline will change any website pages content, thats why dont believe on screenshots


//-----------------------------------------------------


// document.body.firstElementChild.children[3].dataset
// document.body.firstElementChild.children[4].dataset