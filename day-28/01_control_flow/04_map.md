# 🔹 What is a `Map` in JavaScript?

A **Map** is a built-in **key–value collection** introduced in ES6.
It’s similar to a plain JavaScript object (`{}`), but with **important differences**:

* Keys can be **any type** (objects, functions, primitives).
* Maintains **insertion order** of keys.
* Has useful **methods** for working with entries.
* The `size` property gives the number of entries directly.

---

# 🔹 Creating a Map

```js
let myMap = new Map();
```

Or initialize with values:

```js
let myMap = new Map([
  ["name", "Alice"],
  ["age", 25],
  ["isStudent", true]
]);
```

---

# 🔹 Common Methods and Properties

1. **set(key, value)** → Adds/updates a value.
2. **get(key)** → Retrieves value by key.
3. **has(key)** → Checks if key exists.
4. **delete(key)** → Removes entry.
5. **clear()** → Removes all entries.
6. **size** → Number of key–value pairs.

---

### ✅ Example 1: Basic Operations

```js
let userMap = new Map();

userMap.set("name", "John");
userMap.set("age", 30);
userMap.set("isAdmin", true);

console.log(userMap.get("name"));   // "John"
console.log(userMap.has("age"));    // true
console.log(userMap.size);          // 3

userMap.delete("isAdmin");
console.log(userMap.size);          // 2

userMap.clear();
console.log(userMap.size);          // 0
```

---

# 🔹 Keys Can Be Anything

Unlike objects (where keys are strings/symbols), in a `Map` **any value can be a key**.

### ✅ Example 2: Objects as keys

```js
let myMap = new Map();

let objKey = { id: 1 };
let funcKey = function() {};
let primitiveKey = "hello";

myMap.set(objKey, "Object Value");
myMap.set(funcKey, "Function Value");
myMap.set(primitiveKey, "Primitive Value");

console.log(myMap.get(objKey));     // "Object Value"
console.log(myMap.get(funcKey));    // "Function Value"
console.log(myMap.get("hello"));    // "Primitive Value"
```

👉 In plain objects, `objKey` would become `"[object Object]"`. But in `Map`, the key reference is preserved.

---

# 🔹 Iteration

`Map` maintains **insertion order** of keys.

### Iterating methods:

1. `map.keys()` → returns iterator of keys.
2. `map.values()` → returns iterator of values.
3. `map.entries()` → returns iterator of `[key, value]` pairs.
4. `for...of` → loops through entries.

### ✅ Example 3: Iteration

```js
let myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3]
]);

for (let [key, value] of myMap) {
  console.log(`${key} = ${value}`);
}

// Keys
for (let key of myMap.keys()) console.log("Key:", key);

// Values
for (let val of myMap.values()) console.log("Value:", val);
```

---

# 🔹 Map vs Object

| Feature       | Map                                          | Object                                      |
| ------------- | -------------------------------------------- | ------------------------------------------- |
| Key types     | Any (objects, functions, primitives)         | Strings & Symbols only                      |
| Order of keys | Preserves insertion order                    | No guaranteed order                         |
| Size          | `map.size`                                   | Must compute with `Object.keys(obj).length` |
| Iteration     | Easy with `for...of`, `.keys()`, `.values()` | Must use `for...in`, `Object.keys()` etc.   |
| Performance   | Optimized for frequent additions/deletions   | Slower for dynamic additions/deletions      |

---

# 🔹 Advanced Example

```js
let students = new Map();

students.set({ id: 1 }, { name: "Alice", grade: "A" });
students.set({ id: 2 }, { name: "Bob", grade: "B" });

for (let [key, value] of students) {
  console.log("Key:", key, "Value:", value);
}
```

Each `{id: ...}` is a **different object reference**, so they are treated as unique keys.

---

✅ **In Summary**:

* A `Map` is a **better choice than objects** when you need key–value pairs with **any type of keys** and frequent **insertions/deletions**.
* It has **built-in methods** for clean iteration and size checking.
* Unlike objects, `Map` doesn’t convert non-string keys into strings.
