function addLanguages(langName){
    let lists = document.createElement('li')
    lists.innerText = `${langName}`
    document.querySelector('.container').appendChild(lists)
} // but using innerHTML or innerText or innerContent is not optimized way of coding
addLanguages("Python")
addLanguages("Javascript")


// that why we can use createTextNode, its actually do the same work but in very optimized way
function addOptiLanguages(langName){
    let lists = document.createElement('li');
    lists.appendChild(document.createTextNode(`${langName}`))
    document.querySelector('.container').appendChild(lists)
}
addOptiLanguages("Typescript")
addOptiLanguages("Golang")
addOptiLanguages(prompt("Enter language name"))



// nth-child
const selectingLists = document.querySelector("li:nth-child(4)")
console.log(selectingLists) // if not loaded refresh it multiple times