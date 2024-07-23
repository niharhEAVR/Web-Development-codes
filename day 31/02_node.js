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
}