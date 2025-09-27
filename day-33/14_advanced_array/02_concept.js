// Explore Engineering side for array
// array beyond the basics, beyond the mdn of javascript array


// continious, Holey have 3 types of array which is written down here
// SMI (small integer)
// Packed element
// Double (float, string, function)


const arrTwo = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

// after doing this this array become PACKED_DOUBLE_ELEMENTS array, now if we want to get back on PACKED_SMI_ELEMENTS array then we cant go back even if you delete that particular value we still cant got back
// once the array is downgraded we cant go back from there

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11
// HOLEY_ELEMENTS


console.log(arrTwo)
console.log(arrTwo[9])
// once a array becomes a HOLEY_ELEMENTS then when we want to access the hole elements we have to go through 4 type of checks
// 1. bound check // checks the value is inside the array length or outside the array length
// 2. hasOwnProperty(arrTwo,9)
// 3. hasOwnProperty(arrTwo.prototype,9) // prototypal of javascript checking
// 4. hasOwnProperty(Object.prototype,9)
// Thats why holes are very expensive in JS


// From the Optimized side the highest thing is SMI then comes DOUBLE then PACKED
// SMI > DOUBLE > PACKED
// From the HOLEY Optimized side the highest thing is HOLEY_SMI then comes HOLEY_DOUBLE then HOLEY_PACKED
// HOLEY_SMI > HOLEY_DOUBLE > HOLEY_PACKED

// once a SMI_PACKED_ELEMENT array downgraded into HOLEY_ELEMENTS then it cant upgraded back

const arrThree = new Array(3)
// just 3 holes. = HOLEY_SMI_ELEMENTS
arrThree[0] = '1'
arrThree[1] = '2'
arrThree[2] = '3'
// now this array become HOLEY_ELEMENTS
// means that it was downgraded


// So how can we assign values in array without downgrading the array?
// then we have declare array like this way
const arrFour = [] // this is HOLEY_SMI_ELEMENTS array
arrFour.push('1')
arrFour.push('2')
arrFour.push('3')
// in this case the array becomes PACKED_ELEMETS ,
// here no downgrading happening

const arrFive = [1, 2, 3, 4, 5]
arrFive.push(Infinity)