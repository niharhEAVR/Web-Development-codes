The `super` keyword is **used to call functions on an object's parent class** (also known as the superclass).

---

## 🔹 1. Basic Meaning

In ES6 **class inheritance**, `super` allows you to:

* Call the **constructor of the parent class**.
* Call **methods of the parent class**.

---

### **Example — Calling Parent Constructor**

```js
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, grade) {
        super(name); // Calls the parent (Person) constructor
        this.grade = grade;
    }

    display() {
        console.log(`${this.name} has grade ${this.grade}`);
    }
}

const s = new Student("Alice", "A");
s.greet();    // Hello, my name is Alice
s.display();  // Alice has grade A
```

#### What happened:

* `Student` inherits from `Person`.
* Inside `Student`’s constructor, we call:

  ```js
  super(name);
  ```

  This calls `Person`’s constructor and sets `this.name`.
* If we didn’t call `super(name)`, JavaScript would throw an error:

  > Must call `super()` before accessing `this` in derived class constructors.

---

### **Example — Calling Parent Method**

```js
class Person {
    greet() {
        console.log("Hello from Person");
    }
}

class Student extends Person {
    greet() {
        super.greet(); // Calls greet() from Person
        console.log("Hello from Student");
    }
}

let s = new Student();
s.greet();
```

**Output:**

```
Hello from Person
Hello from Student
```

Here:

* `super.greet()` calls the parent’s method.
* Then we add extra behavior in the child class.

---

## 🔹 2. Rules About `super`

1. **Inside a constructor:**
   You **must** call `super()` before using `this` if the class extends another class.
2. **Inside methods:**
   You can call `super.methodName()` to use the parent method.
3. `super` **refers to the parent class’s prototype** inside methods, and to the parent class constructor inside constructors.

---

### **Quick analogy**

Think of `super` like saying:

> "Hey parent class, do your thing."

---
---
---


### **1. When we declare a constructor in a child class**

Yes — if you **declare a constructor** in a child class (`extends` another class), the **parent class’s constructor does not automatically run** anymore.
It gets **overwritten** by the child’s constructor.

So, if you want the parent’s constructor to also run, you **must call it explicitly** using `super(...)`.

#### Example:

```js
class Person {
    constructor(name) {
        console.log("Person constructor");
        this.name = name;
    }
}

class Student extends Person {
    constructor(name, grade) {
        // If we don’t call super(), this will throw an error
        super(name); // Calls Person's constructor
        console.log("Student constructor");
        this.grade = grade;
    }
}

let s = new Student("Alice", "A");
```

**Output:**

```
Person constructor
Student constructor
```

⚠️ If you remove `super(name)` above, JavaScript throws:

> ReferenceError: Must call super constructor in derived class before accessing 'this'.

This happens because JavaScript **needs the parent class constructor to initialize `this`** before the child class can add its own properties.

---

### **2. If we are NOT using inheritance**

If a class doesn’t use `extends` (no inheritance), there is **no parent constructor**, so there’s no `super` at all.
You just define your own constructor normally.

#### Example:

```js
class Person {
    constructor(name) {
        this.name = name;
    }
}

let p = new Person("Alice");
console.log(p.name); // Alice
```

No `super()` here — because there is no parent class.

---

### **Summary Table**

| Case                            | Need to call `super()`?            |
| ------------------------------- | ---------------------------------- |
| Child class with constructor    | ✅ Must call before `this`          |
| Child class without constructor | ❌ JS auto-calls parent constructor |
| No inheritance                  | ❌ Not applicable                   |

---

💡 Quick tip:
If the child class **doesn’t define a constructor**, JavaScript will **automatically create one** that just calls the parent constructor with the same arguments.
Example:

```js
class Person {
    constructor(name) {
        this.name = name;
    }
}

class Student extends Person { }

let s = new Student("Alice");
console.log(s.name); // Alice
```

Here, JS automatically creates:

```js
constructor(...args) {
    super(...args);
}
```
