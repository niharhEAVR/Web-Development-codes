**Lexical Scoping** and **Closure Scoping** are fundamental concepts in JavaScript (and other programming languages) that determine how variables are accessed in nested functions.

### Lexical Scoping

**Lexical Scoping** (or **static scoping**) means that the accessibility of variables is determined by their location within the source code, and nested functions have access to variables declared in their outer scope. 

JavaScript uses lexical scoping, meaning a function has access to variables in the scope where it was defined, regardless of where it's executed.

#### Example of Lexical Scoping

```javascript
function outerFunction() {
    const outerVariable = "I'm outside!";

    function innerFunction() {
        console.log(outerVariable); // Can access outerVariable due to lexical scoping
    }

    innerFunction();
}

outerFunction(); // Output: "I'm outside!"
```

In this example:
- `innerFunction` is nested within `outerFunction`.
- Because of lexical scoping, `innerFunction` can access `outerVariable`, which is declared in the outer scope.

### Closure

A **Closure** is created when a function retains access to its lexical scope, even after the outer function that created it has finished executing. Closures "close over" the variables in their environment, preserving them for future reference.

#### Example of Closure Scoping

```javascript
function makeCounter() {
    let count = 0; // Variable in the outer scope

    return function() { // Inner function forms a closure
        count++; // Inner function can access and modify the outer scope variable
        return count;
    };
}

const counter = makeCounter();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
```

In this example:
- `makeCounter` defines a local variable `count`.
- The function returned by `makeCounter` forms a closure, preserving access to `count` even after `makeCounter` has completed.
- Each time `counter()` is called, it updates and returns the `count`, demonstrating the preserved state.

### Key Differences:
- **Lexical scoping**: Determines the accessibility of variables based on where functions and variables are declared in the code.
- **Closure**: Allows an inner function to remember and access variables from its lexical scope, even when the outer function has completed execution.

These concepts enable powerful patterns, such as encapsulating state within functions, which are often used in JavaScript for managing data and creating private variables.

---

# in the 01_closure_scoping.js
### How Lexical Scoping and Closures Are Used Here

- **Lexical Scoping**: The function `init` has access to the `color` variable from its lexical scope (the outer function `changeColor`), even though it’s not defined inside `init`. This is due to lexical scoping, where `init` is aware of the scope it was created in.

   ---

- **Closure**: When `changeColor('orange')` or `changeColor('blue')` is called, each call creates a **new closure** that preserves the `color` value passed to `changeColor` (either `'orange'` or `'blue'`). The `init` function within each closure retains access to its specific `color` value even after `changeColor` has finished executing, allowing the background color to be changed correctly based on which button is clicked.

This pattern is helpful because it allows you to pass data (`color` in this case) into a function (`init`) that is used as an event handler, without needing to use global variables or other complex methods for data management.