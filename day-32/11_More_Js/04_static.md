## 🔹 `static` Keyword in JavaScript

In **JavaScript classes**, the `static` keyword is used to define **methods or properties** that belong to the **class itself**, not to the objects (instances) created from it.

That means:

* A **static method/property** is accessed **using the class name**, not the instance.
* Instances (objects) **cannot directly access** static methods or properties.

---

### ✅ Example 1: Static Method

```js
class Calculator {
    static add(a, b) {
        return a + b;
    }
}

console.log(Calculator.add(5, 10)); // ✅ 15
const calc = new Calculator();
console.log(calc.add); // ❌ undefined
```

Here:

* `add` is a **static method**, so it’s called like `Calculator.add()`.
* An instance (`calc`) cannot access `add`.

---

### ✅ Example 2: Static Property

```js
class Car {
    static wheels = 4;
}

console.log(Car.wheels); // ✅ 4
const myCar = new Car();
console.log(myCar.wheels); // ❌ undefined
```

---

### ✅ Example 3: Regular vs Static

```js
class Person {
    constructor(name) {
        this.name = name; // instance property
    }

    sayHi() {   // instance method
        console.log(`Hi, I’m ${this.name}`);
    }

    static generalInfo() { // static method
        console.log("All persons are humans.");
    }
}

const p1 = new Person("Alice");

p1.sayHi();         // ✅ Works → "Hi, I’m Alice"
Person.generalInfo(); // ✅ Works → "All persons are humans."
p1.generalInfo;     // ❌ undefined
```

---

## 🔹 When to Use `static`?

* For **utility/helper functions** (e.g., `Math.max()` is static).
* For **class-level data** (shared across all objects).
* To keep things that don’t depend on individual objects.

---

👉 In short:

* **Static = belongs to class itself**
* **Non-static = belongs to each instance (object)**

---
---
---


Static behaves a little differently when **inheritance** is involved in JavaScript. Let’s break it step by step.

---

## 🔹 Static in Inheritance

When you use `static` in a **base (parent) class**, the **child (subclass) inherits those static methods and properties**.
But remember: they are still tied to the **class**, not the instances.

---

### ✅ Example 1: Static Method Inheritance

```js
class Animal {
    static category() {
        return "Animal Kingdom";
    }
}

class Dog extends Animal {}

console.log(Animal.category()); // ✅ "Animal Kingdom"
console.log(Dog.category());    // ✅ "Animal Kingdom" (inherited)
```

Here:

* `Dog` inherits the static method `category` from `Animal`.
* We can call `Dog.category()` directly.

---

### ✅ Example 2: Overriding Static

```js
class Parent {
    static hello() {
        console.log("Hello from Parent");
    }
}

class Child extends Parent {
    static hello() {
        console.log("Hello from Child");
    }
}

Parent.hello(); // "Hello from Parent"
Child.hello();  // "Hello from Child" (overrides)
```

* Static methods can be **overridden** just like normal methods.

---

### ✅ Example 3: Static + Instance Mix

```js
class Vehicle {
    constructor(name) {
        this.name = name;
    }

    drive() {
        console.log(`${this.name} is driving`);
    }

    static companyInfo() {
        console.log("Vehicles are made by a company.");
    }
}

class Car extends Vehicle {}

const c = new Car("Tesla");
c.drive();           // ✅ "Tesla is driving"
Car.companyInfo();   // ✅ "Vehicles are made by a company."
c.companyInfo;       // ❌ undefined
```

👉 Notice:

* Instance (`c`) **inherits instance methods**.
* Class (`Car`) **inherits static methods**.

---

### ✅ Example 4: Super with Static

You can even use `super` with static methods in child classes:

```js
class A {
    static greet() {
        console.log("Hello from A");
    }
}

class B extends A {
    static greet() {
        super.greet(); // call parent’s static method
        console.log("Hello from B");
    }
}

B.greet();
// Output:
// Hello from A
// Hello from B
```

---

## 🔹 Summary (Static + Inheritance)

1. **Child classes inherit parent’s static members**.
2. **Static methods/properties belong to the class, not instances**.
3. **They can be overridden** in child classes.
4. **`super` works with static methods** inside child static methods.

---

👉 Think of `static` in inheritance as **shared class-level behaviors** that pass down the inheritance chain, just like how `Math` methods (e.g., `Math.max`) are static but available globally.

---

Do you want me to also show a **real-world example** (like `User` → `AdminUser` with static methods for validation) so it feels more practical?
