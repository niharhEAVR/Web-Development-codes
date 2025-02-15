Yes, you can work with Promises without using `.then()`, `.catch()`, or `.finally()` by leveraging **async/await** syntax. This approach allows you to write asynchronous code in a way that looks and feels more like synchronous code, making it more readable in many cases.

### Example of Using `async/await` Instead of `.then()`, `.catch()`, and `.finally()`

Here’s an example where we use `async/await` to handle a Promise without chaining `.then()`, `.catch()`, or `.finally()`.

```javascript
const myPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let flag = Math.random() > 0.5;
        if (flag) {
            resolve({username: "william", gmail: "william.offical@mail.com"})
        } else {
            reject('ERROR: login failed')
        }
    }, 1000)
});

let consumeMyPromise = async ()=>{
    try {
        const response = await myPromise // Resolves the Promise
        console.log("promise resolved:"response); // This handles the resolved value
    } catch (error) {
        console.log(error); // This handles any errors
    } finally {
    console.log("Cleanup: Operation complete."); // This runs after try/catch, for cleanup
  }
}
consumeMyPromise()
```

### Explanation

- **`await`**: Suspends the execution of the function until the Promise resolves. If the Promise resolves, it returns the resolved value; if it rejects, it throws an error.
- **`try/catch` block**: Acts as a substitute for `.then()` and `.catch()`:
  - The `try` block is used to handle the resolved value of the Promise.
  - The `catch` block handles errors from the rejected Promise.
- **`finally`**: A `finally` block can be used after `try/catch` to perform cleanup, similar to `.finally()` in Promises.