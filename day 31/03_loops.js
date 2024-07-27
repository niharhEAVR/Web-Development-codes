// for loop
/*
    for(let i = 1; i<=100; i++){
        console.log(i)
    }
*/
// while loop
/*
    let i = 0
    while(i<=10){
        console.log(i)
        i++
    }
*/
// do while loop
/*
    let i = 111
    do{
        console.log(i)
        i++
    }while(i<10)
*/


{
    let data = {
        name: "nihar",
        professional: "student",
        degree: "B.C.A"
    }
    for (const key in data) {
        console.log(key)
    }
    for (const key in data) {
        const element = data[key];
        console.log(element)
    }
    
    for (const key in data) {
        const element = data[key];
        console.log(key, element)
    }
}