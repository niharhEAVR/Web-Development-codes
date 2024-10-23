let form = document.querySelector('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let result = document.querySelector('#results')
    let append = document.querySelector('#weight-guide')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = 'Please give a valid Height'
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = 'Please give a valid Weight'
    }else{
        var BMI = (weight/(height**2/10000)).toFixed(2)
        result.innerHTML = `your BMI is ${BMI}`
    }

    if(BMI>=16.5 && BMI<=18.6){
        let output = document.createElement('p')
        output.innerHTML = 'You are Under Weight'
        append.appendChild(output)
    }else if(BMI>=18.6 && BMI<=24.9){
        let output = document.createElement('p')
        output.innerHTML = 'You have Normal Weight'
        append.appendChild(output)
    }else{
        let output = document.createElement('p')
        output.innerHTML = 'You are Over Weight'
        append.appendChild(output)
    }

})