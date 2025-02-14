In JavaScript, memory management is crucial for understanding how data is stored and accessed. The two types of memory used are **Heap** and **Stack**, and they store different kinds of values. Let's break it down:

### 1. **Stack Memory (Stores Primitive Data Types)**
   - Stack memory is used for **static** storage and follows a **Last In, First Out (LIFO)** principle.
   - It is used to store **primitive** data types such as:
     - `Number`
     - `String`
     - `Boolean`
     - `Null`
     - `Undefined`
     - `Symbol`
     - `BigInt`
   - These values are **stored directly** in memory and accessed quickly.
   - Since primitives are immutable, whenever you assign a primitive to another variable, **a copy of the value** is created.

   **Example:**
   ```javascript
   let a = 10;
   let b = a; // 'b' gets a copy of 'a'
   b = 20;

   console.log(a); // 10
   console.log(b); // 20
   ```
   - `a` and `b` are stored in the stack.
   - When `b = a` is assigned, a **copy** of `a` is made.
   - Changing `b` does **not** affect `a` because they are stored separately.

---

### 2. **Heap Memory (Stores Non-Primitive Data Types)**
   - Heap memory is used for **dynamic** storage and is where complex data structures are stored.
   - It stores **non-primitive** data types such as:
     - `Objects`
     - `Arrays`
     - `Functions`
   - Unlike primitives, non-primitive types are stored **by reference** in memory.
   - When assigning an object to a variable, the **reference (memory address)** is stored in the stack, while the actual data resides in the heap.
   - If you assign an object to another variable, both variables **point to the same reference**, meaning changes to one affect the other.

   **Example:**
   ```javascript
   let obj1 = { name: "John" };
   let obj2 = obj1; // 'obj2' gets a reference to 'obj1'
   obj2.name = "Doe";

   console.log(obj1.name); // "Doe"
   console.log(obj2.name); // "Doe"
   ```
   - `obj1` is stored in the heap.
   - `obj2` **does not create a new object**; instead, it **points to the same reference** in memory.
   - Changing `obj2.name` also changes `obj1.name` because both refer to the same object.

---

### **Key Differences Between Stack and Heap**
| Feature          | Stack (Primitive Data) | Heap (Non-Primitive Data) |
|-----------------|----------------------|----------------------|
| Type of Storage | Static (Fixed Size)  | Dynamic (Flexible)  |
| Speed          | Faster               | Slower             |
| Stores         | Primitive values      | Objects, Arrays, Functions |
| Assignment     | Copies value          | Copies reference   |
| Mutability     | Immutable (Creates new memory on change) | Mutable (Changes affect all references) |

Understanding **Stack vs. Heap** helps in avoiding **unintended mutations** and managing **memory efficiently** in JavaScript. 🚀


---
---
---

Here’s how heap memory works for **objects, arrays, and functions** with reference examples for each:

---

## **1. Heap Memory for Objects**
Objects in JavaScript are stored in **heap memory**, and variables store a **reference** to that memory location.

### **Example:**
```javascript
let obj1 = { name: "Alice", age: 30 };
let obj2 = obj1; // obj2 now holds a reference to the same object

obj2.age = 35; // Modifying obj2 also affects obj1

console.log(obj1.age); // Output: 35 (since obj1 and obj2 reference the same object)
console.log(obj2.age); // Output: 35
```
👉 **Explanation:** Both `obj1` and `obj2` point to the same object in **heap memory**, so modifying `obj2` also updates `obj1`.

---

## **2. Heap Memory for Arrays**
Arrays also reside in the **heap memory** and are referenced by variables.

### **Example:**
```javascript
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 holds the same reference

arr2.push(4); // Modifying arr2 also affects arr1

console.log(arr1); // Output: [1, 2, 3, 4] (since both arr1 and arr2 point to the same array)
console.log(arr2); // Output: [1, 2, 3, 4]
```
👉 **Explanation:** Since arrays are stored in the **heap**, `arr1` and `arr2` reference the **same** memory location. Changing `arr2` also updates `arr1`.

---

## **3. Heap Memory for Functions**
Functions in JavaScript are objects and are stored in the **heap memory**.

### **Example:**
```javascript
function greet() {
  console.log("Hello, world!");
}

let sayHello = greet; // sayHello holds a reference to the function

sayHello(); // Output: "Hello, world!"
```
👉 **Explanation:** The function `greet` is stored in the **heap memory**, and `sayHello` holds a reference to it.

### **Function with Objects in Heap**
```javascript
let user = {
  name: "Bob"
};

function updateUser(obj) {
  obj.name = "Charlie"; // Modifying the object
}

updateUser(user);

console.log(user.name); // Output: "Charlie"
```
👉 **Explanation:** The function modifies the object in **heap memory**, so the changes persist even outside the function.

---

### **Key Takeaways**
1. **Objects, arrays, and functions are stored in the heap** while variables hold **references** to them.
2. **Modifying a referenced object or array affects all variables pointing to it.**
3. **Primitive values (numbers, strings, booleans) are stored directly in the stack**, not the heap.

Let me know if you need further clarification! 🚀