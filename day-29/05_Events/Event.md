## **1. What is an Event Listener?**  
An **event listener** is a method that waits for an event (like a click, hover, key press, etc.) on an HTML element and runs a function when the event occurs.  

### **Syntax:**
```js
element.addEventListener(event, function, useCapture);
```
- `element` → The HTML element to listen to.  
- `event` → The type of event (`click`, `mouseover`, `keydown`, etc.).  
- `function` → The callback function to execute when the event happens.  
- `useCapture` (optional) → Boolean (`true` for event capturing, `false` for bubbling). Default is `false`.

### **Example:**
```js
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
```
When the button is clicked, the function executes, showing an alert.

---

## **2. What is Event Bubbling?**
### **Event Flow Concept**  
There are two phases when an event occurs:  
1. **Capturing Phase (Trickling Down)**: The event moves from the root `<html>` down to the target element.  
2. **Target Phase**: The event reaches the target element.  
3. **Bubbling Phase (Moving Up)**: The event starts from the target element and bubbles up through its ancestors (parent, grandparent, etc.).

### **Example of Bubbling**
```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```
```js
document.getElementById("parent").addEventListener("click", () => {
    alert("Parent clicked!");
});

document.getElementById("child").addEventListener("click", () => {
    alert("Child clicked!");
});
```
### **What Happens Here?**
1. You click the **button (`child`)**.  
2. The `child` event fires first (`"Child clicked!"` alert).  
3. Then, the event bubbles up to the `parent` (`"Parent clicked!"` alert).  

---

## **3. Stopping Event Bubbling**
To **prevent bubbling** (so the event does not propagate to parent elements), use `event.stopPropagation()`.  

### **Modified Example:**
```js
document.getElementById("child").addEventListener("click", (event) => {
    event.stopPropagation();  // Stops bubbling
    alert("Only Child Clicked!");
});
```
Now, clicking `child` will **not** trigger the parent’s event.

---

## **4. Event Capturing (Opposite of Bubbling)**
By default, event listeners work in the **bubbling phase** (`false`). But you can make them work in the **capturing phase** (`true`).

```js
document.getElementById("parent").addEventListener("click", () => {
    alert("Parent clicked first!");
}, true);
```
Now, the **parent's event fires first**, then the child.

---

## **5. Stopping Default Actions (`preventDefault()`)**
If an event has a default action (like a form submitting or a link navigating), you can prevent it using `event.preventDefault()`.  

### **Example (Preventing Link Navigation):**
```js
document.getElementById("myLink").addEventListener("click", (event) => {
    event.preventDefault(); // Stops the link from navigating
    alert("Link click prevented!");
});
```

---

## **Summary**
1. **Event Listener** listens for events and executes a function.  
2. **Event Bubbling** means events start at the target and propagate **upward** to ancestors.  
3. Use `event.stopPropagation()` to **stop bubbling**.  
4. **Event Capturing** makes the event fire **from top to bottom** (`true` in `addEventListener`).  
5. Use `event.preventDefault()` to **stop default actions**.  

---
---
---



# **1. What is an Event Listener again?**
An **event listener** is a function that listens for user actions (events) like clicks, key presses, mouse movements, etc., on an HTML element and executes a function when the event occurs.  

### **Basic Syntax:**
```js
element.addEventListener(eventType, callbackFunction, useCapture);
```
- **`element`** → The target HTML element.  
- **`eventType`** → The event to listen for (`click`, `mouseover`, `keydown`, etc.).  
- **`callbackFunction`** → The function to execute when the event happens.  
- **`useCapture`** → Optional (`true` for event capturing, `false` for bubbling). Default is `false`.

### **Example (Click Event Listener)**
```js
document.getElementById("btn").addEventListener("click", function() {
    alert("Button clicked!");
});
```
This waits for the **click** event on `btn` and then runs the function.

---

# **2. Different Types of Events**
You can listen for different types of events:

### **Mouse Events**
| Event | Description |
|--------|-------------|
| `click` | Fires when an element is clicked |
| `dblclick` | Fires when an element is double-clicked |
| `mousedown` | Fires when the mouse button is pressed |
| `mouseup` | Fires when the mouse button is released |
| `mousemove` | Fires when the mouse moves over an element |
| `mouseover` | Fires when the mouse enters an element |
| `mouseout` | Fires when the mouse leaves an element |

### **Example (Mouseover Event)**
```js
document.getElementById("box").addEventListener("mouseover", function() {
    console.log("Mouse entered the box!");
});
```

---

### **Keyboard Events**
| Event | Description |
|--------|-------------|
| `keydown` | Fires when a key is pressed |
| `keyup` | Fires when a key is released |
| `keypress` | Deprecated, use `keydown` |

### **Example (Detecting Key Press)**
```js
document.addEventListener("keydown", function(event) {
    console.log("Key pressed:", event.key);
});
```

---

### **Form Events**
| Event | Description |
|--------|-------------|
| `submit` | Fires when a form is submitted |
| `change` | Fires when an input field value changes |
| `input` | Fires when user types in an input field |
| `focus` | Fires when an input field gets focus |
| `blur` | Fires when an input field loses focus |

### **Example (Form Submit Event)**
```js
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission
    alert("Form submitted!");
});
```

---

### **Other Useful Events**
| Event | Description |
|--------|-------------|
| `scroll` | Fires when the user scrolls the page |
| `resize` | Fires when the window is resized |
| `load` | Fires when the page is fully loaded |
| `contextmenu` | Fires when the user right-clicks |

### **Example (Scroll Event)**
```js
window.addEventListener("scroll", function() {
    console.log("User scrolled!");
});
```

---

# **3. Event Bubbling & Capturing (Event Propagation)**
When an event occurs on a nested element, it moves **up** through its ancestors. This is called **event bubbling**.

### **Example (Event Bubbling)**
```html
<div id="parent">
    <button id="child">Click Me</button>
</div>
```
```js
document.getElementById("parent").addEventListener("click", () => {
    alert("Parent clicked!");
});

document.getElementById("child").addEventListener("click", () => {
    alert("Child clicked!");
});
```
#### **What happens?**
1. Click on `child` → **Child's event fires first**  
2. Then, the event **bubbles up** to `parent`  

### **Stopping Event Bubbling**
Use `event.stopPropagation()` to **prevent bubbling**:
```js
document.getElementById("child").addEventListener("click", (event) => {
    event.stopPropagation();
    alert("Only Child Clicked!");
});
```
Now clicking `child` won’t trigger `parent`.

---

### **Event Capturing (Trickling)**
By default, events bubble **up**. But you can listen during the **capturing phase** (when the event trickles **down** from the root to the element).

```js
document.getElementById("parent").addEventListener("click", () => {
    alert("Parent clicked first!");
}, true); // 'true' makes it capture
```
Now, the **parent’s event fires first**, before the child.

---

# **4. Removing Event Listeners**
You can remove an event listener using `removeEventListener()`.  
**Important:** The function must be referenced (not an anonymous function).

### **Example**
```js
function sayHello() {
    alert("Hello!");
}

document.getElementById("btn").addEventListener("click", sayHello);

// Remove the event listener after 3 seconds
setTimeout(() => {
    document.getElementById("btn").removeEventListener("click", sayHello);
    alert("Event listener removed!");
}, 3000);
```

---

# **5. Delegated Event Listeners (Best Practice)**
Instead of adding listeners to multiple elements, add **one listener** to a parent and handle child clicks dynamically. This improves performance.

### **Example (Without Delegation - Bad)**
```js
document.getElementById("item1").addEventListener("click", () => alert("Item 1 clicked!"));
document.getElementById("item2").addEventListener("click", () => alert("Item 2 clicked!"));
```
If there are 1000 items, **this is inefficient**.

### **Better Approach: Event Delegation**
```js
document.getElementById("list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        alert(event.target.innerText + " clicked!");
    }
});
```
Now, even if new `<li>` elements are added dynamically, they will still work!

---

# **6. Preventing Default Actions**
Some events have default behaviors, like:  
- Clicking a `<a>` tag navigates away  
- Submitting a `<form>` reloads the page  

You can prevent these using `event.preventDefault()`.

### **Example (Prevent Link Navigation)**
```js
document.getElementById("myLink").addEventListener("click", (event) => {
    event.preventDefault();
    alert("Navigation prevented!");
});
```

---

# **7. Once Event Listeners (Only Fire Once)**
If you want an event to **execute only once**, use `{ once: true }` in `addEventListener`.

```js
document.getElementById("btn").addEventListener("click", () => {
    alert("Button clicked once!");
}, { once: true });
```
Now, clicking `btn` will only work **one time**.

---

# **Final Summary**
✅ **Event Listeners** detect user actions and run functions.  
✅ **Event Bubbling** means events go from child to parent (default).  
✅ **Event Capturing** means events go from parent to child (`true` flag).  
✅ **stopPropagation()** prevents bubbling.  
✅ **preventDefault()** stops default actions (like form submission).  
✅ **Delegated Listeners** improve performance by listening at a parent level.  
✅ **removeEventListener()** stops listening for events.  
✅ **{ once: true }** makes an event fire only once.
