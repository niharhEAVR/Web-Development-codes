# 🔹 What is the Spread Operator?

The **spread operator** (`...`) allows you to **expand** iterable values (like arrays, strings, sets, maps) or object properties into **individual elements**.

Think of it as "unpacking" values.

---

# 🔹 1. Spread in Arrays

### ✅ Copy an array (shallow copy)

```js
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

arr2.push(4);

console.log(arr1); // [1, 2, 3] (unchanged)
console.log(arr2); // [1, 2, 3, 4]
```

👉 Without spread, assigning `arr2 = arr1` would copy the reference (both point to same array). With spread, you get a **new array**.

---

### ✅ Merge arrays

```js
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = [...arr1, ...arr2];

console.log(merged); // [1, 2, 3, 4]
```

---

### ✅ Add new elements

```js
let arr = [2, 3, 4];
let newArr = [1, ...arr, 5];

console.log(newArr); // [1, 2, 3, 4, 5]
```

---

### ✅ Convert string to array

```js
let str = "Hello";
let chars = [...str];

console.log(chars); // ["H", "e", "l", "l", "o"]
```

---

# 🔹 2. Spread in Objects

### ✅ Copy objects (shallow copy)

```js
let obj1 = { name: "Alice", age: 20 };
let obj2 = { ...obj1 };

obj2.age = 25;

console.log(obj1.age); // 20 (unchanged)
console.log(obj2.age); // 25
```

---

### ✅ Merge objects

```js
let obj1 = { name: "Alice", age: 20 };
let obj2 = { age: 25, city: "Delhi" };

let merged = { ...obj1, ...obj2 };

console.log(merged); // { name: "Alice", age: 25, city: "Delhi" }
```

👉 If keys clash, later ones overwrite earlier ones (`age: 25` overwrote `age: 20`).

---

### ✅ Add/Update properties

```js
let student = { name: "Bob", score: 50 };

let updated = { ...student, score: 55, passed: true };

console.log(updated); 
// { name: "Bob", score: 55, passed: true }
```

---

# 🔹 3. Spread in Function Calls

### ✅ Expand array into arguments

```js
function add(a, b, c) {
  return a + b + c;
}

let nums = [1, 2, 3];

console.log(add(...nums)); // 6
```

---

### ✅ Combine fixed and dynamic arguments

```js
function greet(g1, g2, g3) {
  console.log(g1, g2, g3);
}

let words = ["Hello", "World"];
greet(...words, "!");  // Hello World !
```

---

# 🔹 4. Spread with Math functions

```js
let numbers = [10, 20, 5];
console.log(Math.max(...numbers)); // 20
console.log(Math.min(...numbers)); // 5
```

👉 Without spread, `Math.max(numbers)` would give `NaN` since it expects numbers, not an array.

---

# 🔹 5. Spread with Sets & Maps

### Convert Set → Array

```js
let set = new Set([1, 2, 3]);
let arr = [...set];

console.log(arr); // [1, 2, 3]
```

### Convert Map → Array

```js
let map = new Map([
  ["a", 1],
  ["b", 2]
]);

let arr = [...map];
console.log(arr); // [["a", 1], ["b", 2]]
```

---

# 🔹 6. Spread vs Rest Operator

They **look the same (`...`)** but are different depending on context:

* **Spread** → expands (on right side: arrays, function calls, objects).
* **Rest** → collects (on left side: function parameters, destructuring).

### Example:

```js
function sum(...nums) {   // rest: collects arguments into array
  return nums.reduce((a, b) => a + b, 0);
}

let arr = [1, 2, 3];
console.log(sum(...arr)); // spread: expands [1,2,3] into 1,2,3
```

---

# 🔹 7. Shallow Copy Warning

Spread only makes a **shallow copy** — nested objects/arrays still share references.

```js
let obj1 = { name: "Alice", address: { city: "Delhi" } };
let obj2 = { ...obj1 };

obj2.address.city = "Mumbai";

console.log(obj1.address.city); // "Mumbai" ❌ (shared reference)
```

👉 For deep copies, use `structuredClone`, `lodash.cloneDeep`, or manual recursion.

---

# ✅ Summary

* **In arrays** → copy, merge, expand, convert string → array.
* **In objects** → copy, merge, add/overwrite properties.
* **In functions** → expand arrays into arguments.
* **With iterables** → unpack Sets, Maps, Strings.
* **Shallow only** → not for deep copies.
* Different from **rest operator** (spread expands, rest collects).
