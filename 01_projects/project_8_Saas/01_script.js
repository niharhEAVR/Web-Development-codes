// Business name generator

let random = (Math.random())
let random2 = (Math.random())
let random3 = (Math.random())

let first, second, third
// random generates number from 0 to 1.0 , then the one third of 1.0 is 0.33 , 0.66 and 0.99~1.0
if(random <= 0.33){
    first = "Crazy"
}else if(random <= 0.66 && random >= 0.33){
    first = "Amazing"
}else{
    first = "Fire"
}

if(random2 <= 0.33){
    second = "Engine"
}else if(random2 <= 0.66 && random2 >= 0.33){
    second = "Foods"
}else{
    second = "Garments"
}

if(random3 <= 0.33){
    third = "Bros"
}else if(random3 <= 0.66 && random3 >= 0.33){
    third = "Limited"
}else{
    third = "Hub"
}

console.log("The name of the business is:",first+"",second+"",third)

console.log(`The name of the business is: ${first} ${second} ${third}`)