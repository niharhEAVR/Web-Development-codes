## 🔹 Primitive vs Non-Primitive in JS

* **Primitive types** (`number`, `string`, `boolean`, `null`, `undefined`, `symbol`, `bigint`) → stored **by value**.
* **Non-primitive types** (`objects`, `arrays`, `functions`) → stored **by reference** (the variable holds a reference to the memory location).

That’s why **copying** works differently.

---

## 🔹 Shallow Copy

A **shallow copy** creates a new object, but it **copies only the top-level properties**.
👉 If a property is itself an object/array, the reference is copied (not the actual nested object).

### Example 1: Shallow Copy with Object Spread

```js
let obj1 = {
  name: "Alex",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

let obj2 = { ...obj1 }; // shallow copy
obj2.name = "John";
obj2.address.city = "Mumbai";

console.log(obj1.name); // "Alex" (separate primitive copy ✅)
console.log(obj1.address.city); // "Mumbai" (reference shared ❌)
```

🔎 **Why?**

* `name` is a primitive → copied by value → independent.
* `address` is an object → reference is copied → both `obj1` and `obj2` point to the same `address`.

---

## 🔹 Deep Copy

A **deep copy** creates a **new object with new copies of all nested objects/arrays**.
👉 No references are shared, so changes in one object do not affect the other.

### Example 2: Deep Copy with `structuredClone`

```js
let obj1 = {
  name: "Alex",
  address: {
    city: "Delhi",
    pin: 110001
  }
};

let obj2 = structuredClone(obj1); // deep copy
obj2.address.city = "Mumbai";

console.log(obj1.address.city); // "Delhi" (unchanged ✅)
```

---

## 🔹 Common Ways of Copying

1. **Shallow Copy**

   * `Object.assign({}, obj)`
   * Spread `{ ...obj }`
   * `Array.prototype.slice()`, `concat()`, `[...arr]`

2. **Deep Copy**

   * `structuredClone(obj)` (modern, handles most types)
   * `JSON.parse(JSON.stringify(obj))` (classic but limited: loses functions, `Date`, `Map`, `Set`, `undefined`)
   * Manual recursion
   * Libraries (`lodash.cloneDeep`)

---

## 🔹 Example 3: Shallow vs Deep in Arrays

```js
let arr1 = [1, [2, 3], 4];

// Shallow copy
let arr2 = [...arr1];
arr2[1][0] = 99;

console.log(arr1[1][0]); // 99 (reference shared ❌)

// Deep copy
let arr3 = structuredClone(arr1);
arr3[1][0] = 88;

console.log(arr1[1][0]); // 99 (unchanged ✅)
```

---

## 🔹 Important Deep Concept

* **Shallow copy = "one layer only"**
* **Deep copy = "all layers (recursive)"**
* But **true deep copy** isn’t always straightforward:

  * Functions, DOM nodes, circular references, class instances may not be preserved by `JSON.stringify`.
  * `structuredClone` is modern, but doesn’t handle functions or DOM.

---

## 🔹 Example 4: Deep Copy Problem with JSON

```js
let obj = {
  name: "Test",
  date: new Date(),
  func: () => console.log("Hello")
};

let copy = JSON.parse(JSON.stringify(obj));

console.log(copy.date instanceof Date); // false ❌ (becomes string)
console.log(copy.func); // undefined ❌
```

---

✅ **In summary**:

* **Shallow copy** → top-level clone, nested objects still share references.
* **Deep copy** → full recursive clone, no reference sharing.
* **Best modern way** → `structuredClone()` if supported, or `lodash.cloneDeep`.
