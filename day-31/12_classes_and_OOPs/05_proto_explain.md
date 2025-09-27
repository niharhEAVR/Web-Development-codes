## 🔹 First Scope: Manual Prototypal Inheritance

```js
const person = {
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const student = {
    name: "Alice",
    grade: "A"
};

// Set `person` as the prototype of `student`
student.__proto__ = person;

student.greet(); // "Hello, my name is Alice"
console.log(student)
```

### What happens:

1. You create an object `person` with a method `greet`.
2. You create another object `student` with its own properties (`name`, `grade`).
3. By writing:

   ```js
   student.__proto__ = person;
   ```

   you set `person` as the **prototype** of `student`.
   This means:

   * If `student` doesn’t have a property/method, JavaScript will **look up the chain** in `person`.
4. So, when you call:

   ```js
   student.greet();
   ```

   * JS doesn’t find `greet` inside `student`.
   * It checks `student.__proto__` (which is `person`).
   * Finds `greet`, calls it with `this` bound to `student`.
   * Hence: `"Hello, my name is Alice"`.

➡️ This shows **delegation through the prototype chain**.

---

## 🔹 Second Scope: Constructor Function + Prototype Method

```js
function nameString(firstName) {
    this.firstName = firstName
}

nameString.prototype.truelength = function () {
    let nameArray = [...this.firstName];
    let filteredNameArray = nameArray.filter(item => item !== ' ')
    let lengthOfName = 0;
    filteredNameArray.forEach(() => {
        lengthOfName++
    })
    console.log(lengthOfName)
    console.log(`The True Length of the Name is: ${lengthOfName}`)
}

let user1 = new nameString("nihar      ")
let user2 = new nameString("     cooldude ")
let user3 = new nameString("william Jones")

user1.truelength()
user2.truelength()
user3.truelength()
```

### What happens:

1. You define a **constructor function** `nameString`.
   When called with `new`, it creates an object with `firstName`.
2. You add a method to its **prototype**:

   ```js
   nameString.prototype.truelength = function () { ... }
   ```

   * Every object created with `new nameString(...)` will share this method.
3. Example:

   ```js
   let user1 = new nameString("nihar      ");
   ```

   * Creates `{ firstName: "nihar      " }`.
   * Its hidden prototype (`__proto__`) is `nameString.prototype`.
   * So `user1.truelength()` works.
4. The `truelength` method:

   * Splits the name string into an array.
   * Removes spaces.
   * Counts the characters.
   * Prints the "true" length (ignoring spaces).

Example outputs:

```
5
The True Length of the Name is: 5
```

5. When you log:

   ```js
   console.log(nameString.prototype)
   console.log(user1.__proto__)
   console.dir(user1)
   ```

   * Both `nameString.prototype` and `user1.__proto__` point to the **same object**.
   * `console.dir(user1)` shows the created object with its properties and prototype chain.

➡️ This shows **classical-style constructor + prototype methods**.

---

## 🔹 Third Scope: Extending Built-in Prototype

```js
let myName = "          nihar           "
String.prototype.trueLength = function(){
    let nameArray = [...this];
    let filteredNameArray = nameArray.filter(item => item !== ' ')
    let lengthOfName = 0;
    filteredNameArray.forEach(() => {
        lengthOfName++
    })
    console.log(`The True Length: ${lengthOfName}`)
}
myName.trueLength()
console.log(myName.__proto__)
```

### What happens:

1. You add a method `trueLength` to `String.prototype`.

   ```js
   String.prototype.trueLength = function() { ... }
   ```

   * This means **all strings** (string objects) will have this method.
   * ⚠️ Even string literals like `"hello"` now inherit this method.
2. `myName.trueLength()`:

   * Calls the custom function.
   * Removes spaces from `"          nihar           "`.
   * Counts letters = `5`.
3. `console.log(myName.__proto__)`:

   * Shows the prototype object for strings (`String.prototype`) — which now includes your new method.

➡️ This shows **monkey-patching a built-in prototype**.

---

## 🧩 Summary of Concepts Demonstrated

1. **First scope** → Manual prototype chaining (`__proto__`).
2. **Second scope** → Constructor function + `prototype` (like OOP class methods).
3. **Third scope** → Extending built-in prototypes (custom methods for `String`).

---

👉 A good analogy:

* **First scope** = You borrow features from another object (`student` borrows from `person`).
* **Second scope** = You build a “class-like” system with constructors and shared methods.
* **Third scope** = You teach JavaScript’s built-in types (like `String`) new tricks.
