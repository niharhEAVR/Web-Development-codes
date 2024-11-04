class SkodaCars{
    start() {
        console.log("start")
    }
    stop() {
        console.log("stop")
    }
    seats(seats){
        this.seater = seats //this (seater) works as a key value
    }
}
console.log(SkodaCars)

const Slavia = new SkodaCars()
Slavia.seats("seating capacuty 5")
console.log(Slavia)

const Superb = new SkodaCars()
console.log(Superb)
console.log(Superb.seats()) //we havnt passed any argument thats why its showing undefined


const Kushaq = new SkodaCars()
console.log(Kushaq)
// class was created one time but can be usable many times in other objects





{
    class car{
        constructor(name,color){
            console.log("constructor is created")
            this.nameOfTheCar = name
            this.colorOfTheCar = color
        }
    }
    let lycer = new car("Madar","Yellow White");
    console.log(lycer)
    // benefits of using the constructor is that we can pass more than one prototype in the constructor function instead of creating one by one, and the code will be easier to understand
}