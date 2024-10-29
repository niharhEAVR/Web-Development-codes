class parent{
    hello(){
        console.log("Hello")
    }
}
class child extends parent{}

const obj = new child;
console.log(obj)
obj.hello() //hello is not created in child class but we can still access it for inheritance






{
    class randomPerson{
        eat(){
            console.log("Eat")
        }
        sleep(){
            console.log("Sleep")
        }
    }
    class bcaStudent extends randomPerson{
        code(){
            console.log("Practices coding in free time")
        }
    }
    class engineer extends randomPerson{
        code(){
            console.log("Practices coding in free time")
        }
    }

    const nihar = new bcaStudent()
    const anubhab = new engineer()
    console.log(nihar)
    nihar.code()
    nihar.eat()
    anubhab.eat()
}