let requestUrl = 'https://api.github.com/users/Nihar-Debnath'
const xhr = new XMLHttpRequest() // this is an object

xhr.open('GET', requestUrl)
xhr.onreadystatechange = function () {
    console.log(xhr.readyState) // request already initialized thats why 0  will not print
    if (xhr.readyState === 4) {
        let data = JSON.parse(this.responseText) //'this' keyword refers to 'xhr' because you’re inside a method of the XMLHttpRequest or (xhr) object. (so instead of using (xhr.responseText) i can use (this.responseText) both are the same thing ), more explanation downward

        console.log(this.responseText)
        console.log(typeof (this.responseText)) //because its a string value thats why we need to convert into js object, then we can use the object key values
        console.log(data)
        console.log(typeof data)

        let url = data["avatar_url"]
        let name = data["name"]
        let followers = data["followers"]
        let image = document.querySelector('.card')
        image.innerHTML = `<img src = "${url}" id = "img">
                                    <h1>Name: ${name}</h1>
                                    <h3>Followers: ${followers}</h3>
                                    <p>Don't compare the name with the Photo, because its my Github Photo.</p>`
    }
}
xhr.send()




//  1. `let requestUrl = 'https://api.github.com/users/Nihar-Debnath'`
// - 'Explanation:' This line defines a variable `requestUrl` that holds the API URL. This URL is used to get information about the GitHub user `Nihar-Debnath`. 

//  2. `const xhr = new XMLHttpRequest()`
// - 'Explanation:' This creates a new `XMLHttpRequest` object (`xhr`), which is used to interact with servers. `XMLHttpRequest` allows for making HTTP requests in JavaScript, and it works asynchronously to load data without reloading the page.

//  3. `xhr.open('GET', requestUrl)`
// - 'Explanation:' This line initializes the request. 
//   - `'GET'` specifies the HTTP method (in this case, a 'GET' request is used to retrieve data).
//   - `requestUrl` is the API endpoint you're sending the request to.
//   - This method doesn't send the request yet; it only prepares it.

//  4. `xhr.onreadystatechange = function () {...}`
// - 'Explanation:' The `onreadystatechange` property assigns a function that gets called whenever the state of the request changes. There are 5 ready states (represented by `xhr.readyState`):
//   - '0': Request is not initialized.
//   - '1': Server connection is established.
//   - '2': Request is received.
//   - '3': Request is being processed.
//   - '4': Request is finished, and the response is ready (this is the final state).
  
//   The function checks if `xhr.readyState` equals 4, which means the request has been completed and the data is ready to be used.

//  5. `console.log(xhr.readyState)`
// - 'Explanation:' This logs the current `readyState` to the console. It's useful for debugging to see the state of the request at various stages.

//  6. `if (xhr.readyState === 4) {...}`
// - 'Explanation:' This checks if the `readyState` is 4, meaning the request has completed, and we have the response. Only when the request is done do we proceed with processing the response.

//  7. `let data = JSON.parse(this.responseText)`
// In your code, you're inside the onreadystatechange event handler of the XMLHttpRequest object (xhr). Since the event handler function is defined as a regular function, when it's called by the XMLHttpRequest object, this automatically refers to the xhr object within that function. So when you write this.responseText, it actually refers to xhr.responseText.

// - 'Explanation:' The server response is in 'JSON format', so `this.responseText` holds the raw JSON string. The `JSON.parse()` method is used to convert the JSON string into a JavaScript object so you can work with it.

// if you wanna see more about this.responseText explanation then read the 01_README.md file

//  8. `let url = data["avatar_url"]`
// - 'Explanation:' Extracts the `avatar_url` property from the `data` object. This holds the URL of the user's GitHub profile picture.

//  9. `let name = data["name"]`
// - 'Explanation:' Extracts the `name` property from the `data` object, which contains the full name of the GitHub user (if available).

//  10. `let followers = data["followers"]`
// - 'Explanation:' Extracts the `followers` property from the `data` object, representing how many people are following this GitHub user.

//  11. `let image = document.querySelector('.card')`
// - 'Explanation:' This selects the HTML element with the class `.card`. This is where the user’s information (profile picture, name, and followers) will be inserted.

//  12. `image.innerHTML = ...`
// - 'Explanation:' This dynamically updates the inner HTML of the `.card` element, inserting:
//    - An image (`<img>`) with the source (`src`) set to the user’s GitHub profile picture URL (`url`).
//    - A heading (`<h1>`) displaying the user’s name.
//    - Another heading (`<h3>`) showing the number of followers.
//    - A paragraph (`<p>`) with a fun note about not comparing the picture and name.

//  13. `xhr.send()`
// - 'Explanation:' Finally, this sends the request to the server. Now, the `XMLHttpRequest` object makes the GET request to the GitHub API, and when the response is ready, the `onreadystatechange` function is triggered to handle the response.