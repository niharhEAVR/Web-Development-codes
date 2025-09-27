# 🔹 1. Lexical Scope

👉 **Definition**:
Lexical scope means that **the scope of a variable is determined by where it is written in the source code**, not by how or where the function is called.

JavaScript uses **lexical (static) scoping**.

That means:

* A function can access variables from its **own scope**, and from its **outer (parent) scopes** where it was defined.
* But **not the other way around**.

---

### ✅ Example of Lexical Scope

```js
function outer() {
    let a = 10;

    function inner() {
        console.log(a); // inner can access outer’s variable
    }

    inner();
}

outer(); // ✅ 10
```

Explanation:

* `inner` has access to `a` because it was **defined inside outer**, so by lexical scope, it “remembers” its parent environment.

---

### ❌ Counter Example

```js
function outer() {
    let a = 10;
}

function inner() {
    console.log(a); // ❌ Error: a is not defined
}

outer();
inner();
```

Here, `inner` doesn’t know `a` because `inner` was **not defined inside outer**, so it has no lexical connection.

---

# 🔹 2. Closure (Closure Scope)

👉 **Definition**:
A **closure** is created when a function “remembers” the variables from its lexical scope, even if that function is executed **outside** its original scope.

In other words:
**Closures = Function + Lexical Environment it was created in.**

---

### ✅ Example of Closure

```js
function outer() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3
```

Explanation:

* `inner` is returned from `outer`.
* Normally, after `outer()` finishes, its variables (`count`) would be gone.
* But since `inner` **closes over** `count`, it *remembers* it.
* That’s why each call to `counter()` keeps updating the same `count`.

This is **closure scope** — the preserved variables from the lexical environment.

---

# 🔹 Lexical Scope vs Closure Scope (Side-by-Side)

| Concept           | What it means                                                                             | Example                                                         |
| ----------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| **Lexical Scope** | Where a variable/function is accessible, based on where it is **written in code**.        | Inner function accessing outer variable.                        |
| **Closure Scope** | When a function “remembers” its lexical scope even after the outer function has finished. | Returning a function that still uses variables from its parent. |

---

### ✅ Combined Example

```js
function makeGreeter(name) {   // outer function
    return function greet() {  // inner function
        console.log("Hello, " + name);
    };
}

const greetJohn = makeGreeter("John");
const greetMary = makeGreeter("Mary");

greetJohn(); // Hello, John
greetMary(); // Hello, Mary
```

* **Lexical scope**: `greet` can see `name` because it was defined inside `makeGreeter`.
* **Closure**: Even after `makeGreeter` has finished, `greet` still remembers its `name`.

---

✅ **In short**:

* **Lexical scope** is about “where code is written” (static).
* **Closure** is about “remembering variables from that lexical scope” (dynamic usage).
