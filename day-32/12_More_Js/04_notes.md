
---

```javascript
const User = {
    _email: 'h@hc.com',
    _password: "abc",


    get email(){
        return `special email - ${this._email.toUpperCase()}`
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
console.log(tea._email);
```

This JavaScript code defines an object, `User`, with some basic structure for storing and accessing user data. Here’s a detailed explanation:

### 1. `User` Object
The `User` object is defined using the `const` keyword, meaning its reference cannot be reassigned, but its properties can still be modified.

#### Properties
- `_email`: Initially set to `'h@hc.com'`. By convention, the underscore (`_`) prefix indicates a private or internal variable, although JavaScript does not enforce private variables in this way.
- `_password`: Set to `"abc"`. However, it’s not accessed or used anywhere else in this code.

#### Getters and Setters
Getters and setters provide a way to control how a property is accessed or modified.

- `get email()`: This getter method allows read access to `email`. When `email` is accessed, this method returns the `_email` property in uppercase using `toUpperCase()`.
  
- `set email(value)`: This setter method allows modification of the `_email` property. When `email` is assigned a new value, this method is called, setting `_email` to `value`.

### 2. `Object.create(User)`
The code creates a new object, `tea`, using `Object.create(User)`. This method creates a new object with `User` as its prototype, meaning `tea` inherits properties and methods from `User`.

### 3. `console.log(tea.email);`
- This accesses the `email` property on `tea`, triggering the `get email()` method in `User`. Since `_email` is set to `'h@hc.com'`, the getter returns `'H@HC.COM'`.

### 4. `console.log(tea._email);`
- This directly accesses the `_email` property on `tea` without using the getter, printing `'h@hc.com'` as it was inherited from `User`.

### Summary of Outputs
1. `console.log(tea.email);` outputs:
   ```
   H@HC.COM
   ```
2. `console.log(tea._email);` outputs:
   ```
   h@hc.com
   ```

### Key Takeaways
- The `get` and `set` keywords create properties with custom behavior for accessing and modifying data.
- `Object.create()` enables `tea` to inherit from `User`, allowing access to its properties and methods.