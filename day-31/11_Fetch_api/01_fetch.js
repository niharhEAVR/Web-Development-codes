{
    // This is a Async Fetch API call:-

    async function basicFetch() {
        let url = Math.random() > 0.5 ? 'https://api.github.com/users/Nihar-Debnath' : 'https://api.github.com/users/randomname$$chumu';

        try {
            let response = await fetch(url);
            console.log(response.ok)
            console.log(response.status)
            // Check if the response is OK (status in the range 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let data = await response.json();
            console.log(data);
        } catch (error) {
            console.log(`Didn't get any data: ${error.message}`); // Print the error message
        }
    }
    basicFetch();
}

{
    // And this is basic Fetch API call or which we use everywhere:-

    function setTimeoutPromisified(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    let myData = fetch('https://api.github.com/users/Nihar-Debnath')
    myData.then(response => response.json())
        .then(async (data) => {
            await setTimeoutPromisified(5000)
            return data
        })
        .then(data => console.log(data.name))
}