// document.querySelector('.unordered-lists').addEventListener('click',(e)=>{
    // let removePicure = e.target.parentNode // the paretNode giving us the list element, if we do not use parentNode then we only get the img element, but we want to remove the list they why we used parentNode

    // removePicure.remove() // this is good but it is not optimized way of writing code

    // removePicure.parentNode.removeChild(removePicure) // here removePicture gives us the list elements and then parentNode giving the unordered list element and then we use the removeChild(removePicture) to remove the lists // and it is very optimized way of coding 
    // console.log(removePicure)
// })
// But here is one drawback is that the if we click on the ul section the whole ul or body got removed



document.querySelector('.unordered-lists').addEventListener('click',(e)=>{
     
    let removePicture = e.target.parentNode

    console.log(e.target.tagName)
    
    if(e.target.tagName === 'IMG'){
        removePicture.parentNode.removeChild(removePicture) 
        console.log(removePicture)
    }
})