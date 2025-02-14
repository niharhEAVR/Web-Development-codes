function box(height, width){
    let column = '';
    for (let i = 0; i < height; i++) {
        let row  = '';       
        for (let j = 1; j <= width+1; j++) {
            if(j === width+1){
                row += new Date().toLocaleTimeString()
            }else{
                row += '* '
            }
        }
        column += row + '\n'
    }
    return column
}

let h = parseInt(prompt('Enter the height of the box in numbers:'))
let w = parseInt(prompt('Enter the width of the box in numbers:'))

let starBox = box(h,w)
console.log(starBox)

alert("Now open the console")