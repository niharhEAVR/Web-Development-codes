## **Types of Loops in JavaScript**  

JavaScript provides **six** types of loops for executing code multiple times:

| Loop Type        | Description |
|-----------------|-------------|
| `for`           | Runs a loop **for** a specific number of iterations. |
| `while`         | Runs a loop **while** a condition is true. |
| `do...while`    | Runs **at least once**, then **while** a condition is true. |
| `for...of`      | Iterates over **iterable objects** like arrays, strings, etc. |
| `for...in`      | Iterates over the **keys** of an object. |
| `.forEach()`    | A **higher-order function** for looping over arrays. |

---

## **1. `for` Loop (Traditional Loop)**
Runs for a fixed number of times.  
### **Syntax:**
```javascript
for (initialization; condition; update) {
    // Code to run
}
```
### **Example:**
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}
```
**Output:**
```
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
Iteration: 5
```
👉 **Breakdown:**  
- `let i = 1;` → Start at `1`.  
- `i <= 5;` → Loop runs **while `i` is ≤ 5**.  
- `i++` → Increments `i` by 1 each iteration.  

---

## **2. `while` Loop (Condition-Based)**
Runs **while** a condition is true.  
### **Syntax:**
```javascript
while (condition) {
    // Code to run
}
```
### **Example:**
```javascript
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++;
}
```
**Output:**
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```
👉 **Use when** the number of iterations is **unknown** before execution.

---

## **3. `do...while` Loop (Runs at Least Once)**
Runs **once** before checking the condition.  
### **Syntax:**
```javascript
do {
    // Code to run
} while (condition);
```
### **Example:**
```javascript
let num = 1;
do {
    console.log("Number:", num);
    num++;
} while (num <= 3);
```
**Output:**
```
Number: 1
Number: 2
Number: 3
```
👉 **Difference from `while`:**  
- Runs at least **once**, even if the condition is `false`.

---

## **4. `for...of` Loop (Iterating Over Iterables)**
Used for **arrays, strings, Maps, Sets, etc.**  
### **Syntax:**
```javascript
for (let item of iterable) {
    // Code to run
}
```
### **Example:**
```javascript
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log(color);
}
```
**Output:**
```
Red
Green
Blue
```
👉 **Best for iterating over** arrays or strings.

---

## **5. `for...in` Loop (Iterating Over Object Keys)**
Used for **objects** (iterates over keys).  
### **Syntax:**
```javascript
for (let key in object) {
    // Code to run
}
```
### **Example:**
```javascript
let student = { name: "John", age: 20, grade: "A" };
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}
```
**Output:**
```
name: John
age: 20
grade: A
```
👉 **Best for iterating over objects** (but not arrays).

---

## **6. `.forEach()` Loop (Higher-Order Function for Arrays)**
Executes a function for **each element in an array**.  
### **Syntax:**
```javascript
array.forEach((element, index, array) => {
    // Code to run
});
```
### **Example:**
```javascript
let numbers = [10, 20, 30];
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});
```
**Output:**
```
Index 0: 10
Index 1: 20
Index 2: 30
```
👉 **Best for arrays**, but **cannot use `break` or `continue`**.

---

## **Key Differences**
| Loop Type      | Used For |
|---------------|--------------------------------|
| `for`         | Fixed number of iterations |
| `while`       | Runs **while** a condition is `true` |
| `do...while`  | Runs **at least once**, then **while** condition is `true` |
| `for...of`    | Iterating **values** of arrays, strings, etc. |
| `for...in`    | Iterating **keys** of objects |
| `.forEach()`  | Array iteration (higher-order function) |

Let me know if you need more examples! 🚀



---
---
---

### **Differences Between `for...in`, `for...of`, and `forEach()`**  

| Feature        | `for...in` | `for...of` | `forEach()` |
|---------------|-----------|------------|-------------|
| **Use Case** | Iterates over **keys** (indexes for arrays, properties for objects) | Iterates over **values** of iterable objects (arrays, strings, maps, etc.) | Iterates over **values** of an array |
| **Best for** | Objects, but can be used on arrays (not recommended) | Arrays, Strings, Maps, Sets, etc. | Arrays |
| **Returns** | Keys (index for arrays, property name for objects) | Values of the iterable | Values of the array |
| **Can use `break` or `continue`?** | ✅ Yes | ✅ Yes | ❌ No |
| **Works on Objects?** | ✅ Yes | ❌ No | ❌ No |
| **Works on Arrays?** | ✅ (but iterates index, not value) | ✅ (iterates value) | ✅ (iterates value) |
| **Modifies Original Array?** | ❌ No | ❌ No | ❌ No |

---

## **1️⃣ `for...in` → Loops Over Object Keys**
- Iterates over **keys (indexes for arrays, property names for objects)**.
- **Best for objects**, but can be used on arrays (not recommended).

### **Example with Objects**
```javascript
let user = { name: "Alice", age: 25, country: "India" };

for (let key in user) {
    console.log(`${key}: ${user[key]}`);
}
```
**Output:**
```
name: Alice
age: 25
country: India
```
👉 **Best for:** Iterating over an object's properties.

### **Example with Arrays (Not Recommended)**
```javascript
let arr = ["a", "b", "c"];

for (let index in arr) {
    console.log(index, arr[index]); // Outputs index, not values
}
```
**Output:**
```
0 a
1 b
2 c
```
🔴 **Why Not Use `for...in` for Arrays?**  
- It loops over **indexes (keys)** instead of values.
- It **may iterate over inherited properties** (unwanted behavior in some cases).

---

## **2️⃣ `for...of` → Loops Over Values of Iterables**
- Iterates over **values** instead of keys.
- **Best for arrays, strings, Maps, and Sets**.

### **Example with Arrays**
```javascript
let numbers = [10, 20, 30];

for (let num of numbers) {
    console.log(num);
}
```
**Output:**
```
10
20
30
```
👉 **Best for:** Arrays, strings, Maps, Sets.

### **Example with Strings**
```javascript
let word = "JavaScript";

for (let char of word) {
    console.log(char);
}
```
**Output:**
```
J
a
v
a
S
c
r
i
p
t
```
👉 **Best for:** Looping through **characters of a string**.

---

## **3️⃣ `forEach()` → Array-Specific Method**
- Works **only on arrays**.
- Uses a **callback function**.
- **Cannot use `break` or `continue`**.

### **Example with Arrays**
```javascript
let fruits = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit, index) => {
    console.log(`Index ${index}: ${fruit}`);
});
```
**Output:**
```
Index 0: Apple
Index 1: Banana
Index 2: Mango
```
👉 **Best for:** Simple array operations (doesn't support `break/continue`).

---

## **Key Takeaways**
| Use Case | **Best Choice** |
|----------|----------------|
| Iterating over **objects** | `for...in` ✅ |
| Iterating over **array values** | `for...of` ✅ |
| Iterating over **array values (functional style)** | `.forEach()` ✅ |
| Iterating over **strings** | `for...of` ✅ |
| Using `break` or `continue` | `for...in` or `for...of` ✅ |

🚀 **Final Thought:**  
- **Use `for...in`** for **objects** (but avoid it for arrays).  
- **Use `for...of`** for **arrays and strings** (modern and clean).  
- **Use `forEach()`** when working with **arrays**, but remember it **cannot break/continue**.  
