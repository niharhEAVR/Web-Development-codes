### First Code (Without `new`)

```javascript
function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this
}

let userOne = User("wolverine", 39, false)
console.log(userOne)
let userTwo = User("deadpool", 56, true)
console.log(userOne)
```

- **`this`**: In this code, `User` is called as a regular function (without `new`). Therefore, `this` refers to the **global object** (or `undefined` if in strict mode).
- **Effect**: Since `this` points to the global object, properties `username`, `loginCount`, and `isLoggedIn` are set directly on the global object, rather than on a new `User` instance.
- **Return Value**: The function returns `this`, which is the global object, causing `userOne` and `userTwo` to point to the global object rather than unique instances.

### Second Code (With `new`)

```javascript
function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this
}

let userOne = new User("wolverine", 39, false)
console.log(userOne)
let userTwo = new User("deadpool", 56, true)
console.log(userOne)
```

- **`new`**: Here, `User` is called with the `new` keyword. The `new` keyword does two things:
  1. It creates a new empty object.
  2. It binds `this` to this new object inside the `User` function.

- **`this`**: Now `this` points to a newly created object (unique for each call to `new User`), not the global object.
- **Return Value**: `new` causes the function to return `this`, which is now the newly created object, giving `userOne` and `userTwo` unique instances of `User` with their own `username`, `loginCount`, and `isLoggedIn` properties.

---

### Key Idea of `this`

- **`this`** is a keyword that points to the object that is currently calling the function.
- When you use `new` with a function (like `new User()`), `this` is set to a **new, empty object**. This lets you add properties to that new object, such as `this.username`, `this.loginCount`, and `this.isLoggedIn`.

Now, let’s look at each code.

---

### First Code (Without `new`)

```javascript
function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this
}

let userOne = User("wolverine", 39, false)
```

1. Here, `User("wolverine", 39, false)` is called without `new`. So, **`this` does not refer to a new object**. Instead:
   - **In non-strict mode**: `this` will refer to the **global object** (like `window` in browsers).
   - **In strict mode**: `this` will be `undefined`, causing an error when trying to set `this.username`.

2. Since `this` doesn’t refer to a new object, **`username`, `loginCount`, and `isLoggedIn`** end up being set on the global object (or an error occurs if in strict mode).

3. When you call `User` without `new`, it doesn’t create a new `User` instance; instead, it modifies global properties.

---

### Second Code (With `new`)

```javascript
function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    return this
}

let userOne = new User("wolverine", 39, false)
```

1. Here, `new User("wolverine", 39, false)` is called with `new`. **Using `new` automatically creates a new object** and sets `this` to that object.

2. Now, when you set `this.username = username`, it assigns the property to this new object instead of the global object.

3. Since `new` returns this new object, `userOne` is now an independent instance of `User` with its own `username`, `loginCount`, and `isLoggedIn` properties.

---

### Summary

- **Without `new`**: `this` does not refer to a new object; it points to the global object, leading to unexpected results.
- **With `new`**: `this` points to a newly created object, allowing you to create unique instances like `userOne` and `userTwo`.