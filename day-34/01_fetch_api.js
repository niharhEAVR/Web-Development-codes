const URL = "https://cat-fact.herouapp.com/facts";




const getFacts = async () =>{ 
    console.log("Getting data......")
    let response = await fetch(URL)
    console.log(response)
}

console.log(getFacts())