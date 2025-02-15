A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous code more elegantly, avoiding callback hell (nested callbacks), and provides a cleaner, more readable way to write asynchronous logic.


### Key Points about Promises:

1. **States of a Promise**:

   - **Pending**: The initial state, neither fulfilled nor rejected.
   - **Fulfilled**: The operation was completed successfully.
   - **Rejected**: The operation failed.

2. **How Promises Work**:

   - A promise starts in the **pending** state.
   - When an asynchronous operation completes, the promise is either **fulfilled** (with a resolved value) or **rejected** (with a reason for failure).
   - In JavaScript Promises, you can pass any type of value to resolve and reject, like number, string, object, array, errorObject, functions, another promise.

3. **Promise Methods**:
   - `.then((onFulfilled)=>{}, (onRejected)=>{})`: Used to handle success (`onFulfilled`) or failure (`onRejected`) of a promise ( Optional ).
   - `.catch((onRejected)=>{})`: Used to handle rejection/failure of a promise.
   - `.finally(()=>{})`: Executes code after the promise is settled (either fulfilled or rejected), without modifying the result.

### Example of a Simple Promise:

```javascript
const myPromise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let random = Math.floor(Math.random() * 10);
    console.log(random);
    if (random >= 0 && random <= 5) {
      console.log("async task is complete");
      resolve("yees");
    } else {
      reject("your promise rejected");
    }
  }, 1000);
});

// Promise Consuming
myPromise
  .then(
    (data) => {
      console.log("Success:", data); // This runs if the promise resolves
    },
    (error) => {
      console.log("Handled in .then():", error); // Optional error handler in .then()
    }
  )
  .catch((error) => {
    console.log("Caught in .catch():", error); // Runs if promise rejects and there's no error  handler in .then()
  })
  .finally(() => {
    console.log("Cleanup: Operation complete."); // No data here, just cleanup
  });
```

### some small key points:

```javascript
.finally((data) => {
    console.log(`Cleanup: Operation complete. ${data}`);
    });
```
The data parameter in .finally() will be undefined. This is because .finally() doesn’t receive any arguments, whether the Promise is resolved or rejected. Its purpose is purely to execute cleanup code without access to the result of the Promise.

### Common Use Case: Fetching Data Asynchronously

For example, fetching data from an API returns a promise:

```javascript
fetch("https://api.github.com/users/Nihar-Debnath")
  .then((response) => response.json()) // Convert response to JSON
  .then((data) => console.log(data)) // Handle the data
  .catch((error) => console.error("Error:", error)); // Handle error if the fetch fails
```

### Why Use Promises?

1. **Better readability**: Promises make asynchronous code easier to read and write compared to traditional callback-based code.
2. **Chaining**: You can chain `.then()` calls to handle multiple asynchronous tasks in a sequence.
3. **Error Handling**: Promises provide a structured way to handle errors using `.catch()`.

### Chaining Promises Example:

```javascript
fetch("https://api.github.com/users/Nihar-Debnath")
  .then((response) => response.json())
  .then((user) => fetch(`https://api.github.com/users/Nihar-Debnath/repos`))
  .then((response) => response.json())
  .then((repos) => {
    console.log(
      `I have ${repos.length} repos on my GitHub and here are the names:\n`
    );
    repos.forEach((repo) => console.log(repo.name));
  })
  .catch((error) => console.log("Error:", error));
```

This code uses the **Fetch API** to make asynchronous HTTP requests to GitHub's API. Here's a step-by-step explanation of what's happening:

### 1. **Initial API Request:**

```javascript
fetch("https://api.github.com/users/Nihar-Debnath");
```

- This line initiates a **GET** request to the GitHub API, specifically for the user `Nihar-Debnath`.
- The `fetch()` function returns a **promise** that resolves with a `Response` object when the request completes.

### 2. **Processing the First Response:**

```javascript
.then(response => response.json())
```

- Once the response from the initial request is received, it is passed to the first `.then()` block.
- `response.json()` converts the `Response` object into JSON format, which is easier to work with in JavaScript.
- The result of `response.json()` is another **promise** that resolves with the actual JSON data (which in this case is the user's details).

### 3. **Chained Request for Repositories:**

```javascript
.then(user => {
    return fetch(`https://api.github.com/users/Nihar-Debnath/repos`);
})
```

- After retrieving the user details (though the user data is not used here), another request is made to the GitHub API to get the list of repositories for the user `Nihar-Debnath`.
- The `fetch()` request is returned within this `.then()` block, initiating a new API call to fetch the repositories.

### 4. **Processing the Repositories Response:**

```javascript
.then(response => response.json())
```

- Once the repositories request is complete, the second `.then()` converts that `Response` object into JSON format, similar to how the user details were handled.
- The result of `response.json()` is a promise that resolves with the list of repositories (in JSON format).

### 5. **Logging the Repositories:**

```javascript
.then(repos => {
        console.log(`I have ${repos.length} repos on my GitHub and here are the names:\n`);
        repos.forEach(repo => console.log(repo.name));
    })
```

- In this block, `posts` contains the JSON data of the repositories (an array of objects, each representing a repository).
- The line `repos.length` calculates the number of repositories in the `posts` arrays off objects.
- The code then logs the total number of repositories.

### 6. **Error Handling:**

```javascript
.catch(error => console.log('Error:', error));
```

- If any error occurs during the entire fetch process (either fetching user details or repositories), it is caught by the `.catch()` block.
- The error message is logged to the console.

### Summary:

- **First**, it fetches the user details from the GitHub API for the user `Nihar-Debnath`.
- **Second**, it fetches the repositories of that user.
- It then prints how many repositories the user has, followed by a list of the repository names.
- Any errors during these processes are caught and logged to the console.
