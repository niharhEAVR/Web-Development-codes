// class parent{
//     constructor(){
//         this.species = "homo sapiens"
//     }
//     eat(){
//         console.log("Obviously they eat")
//     }
// }

// class child extends parent{
//     constructor(hour){
//         this.sleepingTime = hour
//     }
//     sleep(){
//         console.log("Obviously child sleep")
//     }
// }

// let nihar = new child("sleeps for 14 hours")

// if we see now we will get a error like
//  Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// to avoid this error we have to use super() keyword in child constructor





{
    class parent{
        constructor(){
            this.species = "homo sapiens"
        }
        eat(){
            console.log("Obviously they eat")
        }
    }
    
    class child extends parent{
        constructor(hour){
            super()
            this.sleepingTime = hour
        }
        sleep(){
            console.log("Obviously child sleep")
        }
    }
    
    let nihar = new child("sleeps for 14 hours")
    console.log(nihar)
}
{
    class people{
        constructor(name){
            this.species = "homo sapiens"
            this.nameOfThePeople = name
        }
        eat(){
            console.log("Obviously they eat")
        }
    }
    
    class bcaStudent extends people{
        constructor(hour,name){
            super(name)
            this.sleepingTime = hour
        }
        sleep(){
            super.eat()
            console.log("Obviously child sleep")
        }
    }
    
    let nihar = new bcaStudent("sleeps for 14 hours","Nihar")
    console.log(nihar)
    console.log(nihar.sleep())
}