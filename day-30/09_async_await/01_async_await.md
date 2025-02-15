### **What is `async` and `await` in JavaScript?**  
`async` and `await` are modern JavaScript features that make working with **Promises** easier by allowing you to write **asynchronous code** in a more readable, synchronous-looking way.  

---

## **1️⃣ `async` Function**
The `async` keyword is used to **define a function** that **always returns a Promise**.

### **Example:**
```javascript
async function fetchData() {
    return "Hello, Async!";
}

fetchData().then(console.log); // Output: Hello, Async!
```
✅ Even though `"Hello, Async!"` is a regular string, `async` **automatically wraps it in a Promise**.

---

## **2️⃣ `await` Keyword**
The `await` keyword **pauses** the execution of an `async` function **until the Promise is resolved**.

### **Example: Using `await`**
```javascript
async function fetchData() {
    let promise = new Promise((resolve) => {
        setTimeout(() => resolve("Data Loaded"), 2000);
    });

    let result = await promise;  // Waits until the promise is resolved
    console.log(result);         // Output after 2 sec: Data Loaded
}

fetchData();
```
✅ `await promise;` **pauses** execution until the Promise is resolved, but **does NOT block the entire program**.

---

## **3️⃣ Handling Errors with `try...catch`**
When using `await`, we should handle errors with `try...catch`.

```javascript
async function fetchData() {
    try {
        let promise = new Promise((_, reject) => {
            setTimeout(() => reject("Network Error!"), 2000);
        });

        let result = await promise;  // This will cause an error
        console.log(result);
    } catch (error) {
        console.log("Error:", error); // Output: Error: Network Error!
    }
}

fetchData();
```
✅ `try...catch` helps **catch errors** just like `.catch()` in Promises.

---

## **4️⃣ Comparing `async/await` vs `.then()`**
### **Using `.then()`**
```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error));
```
✅ Works, but **nested `.then()` calls** can become messy.

---

### **Using `async/await`**
```javascript
async function getTodo() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getTodo();
```
✅ **More readable** and looks like **synchronous** code!

---

### **Summary**
| Feature | Description |
|---------|-------------|
| `async` | Makes a function always return a Promise. |
| `await` | Pauses execution inside an `async` function until a Promise resolves. |
| `try...catch` | Handles errors inside `async/await`. |
| `async/await` | Makes async code look cleaner & more readable. |