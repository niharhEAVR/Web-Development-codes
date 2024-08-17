// first thing first that strings are immutable

{
    let a = "Nihar"
    console.log(a[0])
    console.log(a[1])
    console.log(a[2])
    console.log(a[3])
    console.log(a[4])
    console.log(a[5])
    console.log(a[6])
    
    console.log(a.length)
}

{
    let myName = "Nihar"
    let favSport = "Cricket"
    // console.log("My name is "+myName+" And my favourite sport is "+favSport)
    console.log(`My name is ${myName} and my favourite sport is ${favSport}`)

    // (``) this symbol is called backtick, its upside the tab and downside the escape button on keyboard
    // this method is called string interpolation
}

{
    // Escape sequence of javascript
    // \n = new line
    // \t = tab
    // \ using backslash anthing you will write inside the string that will surely print
    console.log("\# \& \` \, \n \"\" \'\' \, ")
}

{
    // uppercase and lowercase
    let a = "apple"
    let b = "BANANA"
    console.log(a.toUpperCase())
    console.log(b.toLowerCase())
    // this slice property is exactly like python slice, so the first index number will include and the last one will not include 
    console.log(a.slice(1,4))
    // only one value will print the rest after that included index, no slicing after that
    console.log(a.slice(1))


    console.log(b.replace("ANA", "999"))
    console.log(b)// because the strings are immutable thats why its remains same


    b = b.replace("BA", "69")
    console.log(b)// having the mutability but we can do this though



    console.log(b.concat(" ",a))
    console.log(b.concat(a, " pie"))

    let name = "           nihar debnath            ";
    console.log(name.trim())
    console.log(name) // the original string remains same for immutability
}

{
    let a = "nihar"
    console.log(a.charAt(0))
    console.log(a.charAt(10))
    console.log(a.indexOf("i"))
    console.log(a.startsWith("n"))
    console.log(a.startsWith("h"))
    console.log(a.endsWith("r"))
    console.log(a.endsWith("i"))
}