### **What is a Callback in JavaScript?**
A **callback** is a function that is **passed as an argument** to another function and is **executed later**, usually after some operation completes.

📌 **Why Use Callbacks?**
- JavaScript executes code asynchronously.
- If a function needs to run **after another function completes**, we use a callback.

---

### **Example of a Simple Callback**
```javascript
function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Nihar", sayBye);
```
### **Output:**
```
Hello, Nihar
Goodbye!
```
🔹 The `greet()` function calls `sayBye()` **after** it finishes executing.

---

### **Example with Asynchronous Code (Using `setTimeout`)**
```javascript
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched from API");
        callback();
    }, 2000);
}

function processData() {
    console.log("Processing data...");
}

fetchData(processData);
```
### **Output (after 2 seconds):**
```
Data fetched from API
Processing data...
```
🔹 The callback (`processData()`) **waits** until `fetchData()` is done.

---

## **What is Callback Hell?**
🚨 **Callback Hell** happens when multiple **nested callbacks** make code difficult to read and maintain.

### **Example of Callback Hell**
```javascript
function getUserData(callback) {
    setTimeout(() => {
        console.log("User data fetched");
        callback();
    }, 1000);
}

function getPosts(callback) {
    setTimeout(() => {
        console.log("User posts fetched");
        callback();
    }, 1000);
}

function getComments(callback) {
    setTimeout(() => {
        console.log("Post comments fetched");
        callback();
    }, 1000);
}

// Callback Hell: Nested Callbacks
getUserData(() => {
    getPosts(() => {
        getComments(() => {
            console.log("All data fetched!");
        });
    });
});
```
### **Output (after 3 seconds total delay):**
```
User data fetched
User posts fetched
Post comments fetched
All data fetched!
```
🔹 **Problem:** The code becomes difficult to read and maintain when callbacks **keep nesting inside each other**.

---

## **How to Fix Callback Hell?**
### **1️⃣ Using Promises**
```javascript
function getUserData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User data fetched");
            resolve();
        }, 1000);
    });
}

function getPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("User posts fetched");
            resolve();
        }, 1000);
    });
}

function getComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Post comments fetched");
            resolve();
        }, 1000);
    });
}

// Using Promises to avoid Callback Hell
getUserData()
    .then(getPosts)
    .then(getComments)
    .then(() => console.log("All data fetched!"));
```
✅ **No more deep nesting!**

---

### **2️⃣ Using Async/Await (Best Approach)**
```javascript
async function fetchAllData() {
    await getUserData();
    await getPosts();
    await getComments();
    console.log("All data fetched!");
}

fetchAllData();
```
✅ **Looks clean and easy to read!**

---

## **Summary**
| Concept | Description |
|---------|------------|
| **Callback** | A function passed as an argument to another function |
| **Callback Hell** | Too many nested callbacks making code unreadable |
| **Solution** | Use **Promises** or **Async/Await** to make code cleaner |
