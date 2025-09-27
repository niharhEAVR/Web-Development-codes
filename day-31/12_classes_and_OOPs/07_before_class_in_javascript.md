👉 **Before `class` syntax (ES6, 2015), JavaScript only had constructor functions + prototypes.**
There was no `class` keyword, but people still did object-oriented programming (OOP) using functions and prototypes.

---

## 🔹 How OOP was done before `class`

### 1. **Constructor Functions**

A normal function was used as a “blueprint” for objects:

```js
function User(username, age) {
  this.username = username;
  this.age = age;
}

// instance
let user1 = new User("Wolverine", 39);
console.log(user1.username); // Wolverine
```

Here, `new` makes the function behave like a class constructor.

---

### 2. **Prototype Methods**

Instead of defining methods inside the constructor (which makes copies for every object), developers attached methods to the constructor’s `prototype`:

```js
User.prototype.greet = function() {
  console.log(`Hi, I am ${this.username}`);
};

user1.greet(); // Hi, I am Wolverine
```

✅ This way all instances share the same `greet` method → memory efficient.

---

### 3. **Inheritance (Pre-Class)**

People mimicked “extends” using prototypes.

```js
function Admin(username, age, role) {
  // call parent constructor
  User.call(this, username, age);
  this.role = role;
}

// link prototypes (so Admin inherits User’s methods)
Admin.prototype = Object.create(User.prototype);
Admin.prototype.constructor = Admin;

Admin.prototype.deleteUser = function() {
  console.log(`${this.username} can delete users.`);
};

let admin1 = new Admin("Ironman", 42, "superadmin");
admin1.greet();        // Hi, I am Ironman
admin1.deleteUser();   // Ironman can delete users.
```

---

## 🔹 Then ES6 Classes Came

The **`class` syntax** introduced in ES6 is basically a prettier, cleaner way of writing the same thing:

```js
class User {
  constructor(username, age) {
    this.username = username;
    this.age = age;
  }
  greet() {
    console.log(`Hi, I am ${this.username}`);
  }
}

class Admin extends User {
  constructor(username, age, role) {
    super(username, age);
    this.role = role;
  }
  deleteUser() {
    console.log(`${this.username} can delete users.`);
  }
}
```

Both `User` and `Admin` here still work under the hood using **constructor functions + prototypes**.

---

✅ **Summary**

* Before `class`, devs used **constructor functions** and **prototype chaining** for OOP.
* `class` is just **syntactic sugar** that makes code look cleaner, but internally still uses prototypes.