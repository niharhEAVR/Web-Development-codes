function box(height, width){
    let output = '';
    for (let i = 0; i < height; i++) {
        let line  = '';       
        for (let j = 1; j <= width+1; j++) {
            if(j === width+1){
                line += new Date().toLocaleTimeString()
            }else{
                line += '* '
            }
        }
        output += line + '\n'
    }
    return output
}

// let h = parseInt(prompt('Enter the height of the box in numbers:'))
// let w = parseInt(prompt('Enter the width of the box in numbers:'))

// box(h,w)
let starBox = box(4,3)
console.log(starBox)