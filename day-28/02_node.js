console.log("Hello World!")

{
    {
        let age = 24;
        if(age>18){
            console.log("you are eligible for license")
        }else{
            console.log("you are not eligible for license")
        }
    }

    // arithmetic operator
    {
        let grace = 2;
        console.log(5**grace)
    }
    // exponential operator works as a power

    //comparison operator
    {
        let a = 5;
        let b = "5";
        let c = (a==b);
        console.log(c)
    }
    {
        let a = 5;
        let b = "5";
        let c = (a===b);
        console.log(c)
        // console.log('5' == 5)
        // console.log('5' === 5)
        
    }
    {
        let a = 5;
        let b = "5";
        let c = (a!==b);
        console.log(c)
    }

    {
        let age = 17;
        let reply = (age>18) ? "you can buy alcohal" : "you cant"
        console.log(reply)
    }

    // logical operator
    // logical and
    console.log(1 && 1)
    console.log(1 && 0)
    console.log(0 && 1)
    console.log(0 && 0)
    // logical or
    console.log(1 || 1)
    console.log(1 || 0)
    console.log(0 || 1)
    console.log(0 || 0)
    // logical not
    console.log(!1)
    console.log(!0)


    {
        // shortcircuit method 
        console.log(false || "nihar")
        console.log(false || 1 || 3)
        console.log(false && 1 && 3)
    }



    {
        const fruit = "mango";
        switch (fruit) {
            case "mango":
                console.log(`My fav fruit is ${fruit}`)
                break;
        
            default:
                console.log("Hehe")
                break;
        }
    }
}