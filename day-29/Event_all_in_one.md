**`addEventListener()`** — one of the most powerful methods in the **DOM Event Model**.

---

# 🌐 `addEventListener()` — Basics

👉 Syntax:

```js
element.addEventListener(event, handler, options);
```

* **`event`** → The event type (`"click"`, `"keydown"`, `"mouseover"`, etc.).
* **`handler`** → The callback function to run when the event occurs.
* **`options`** → Optional object or boolean (explained below).

---

# ✅ 1. Basic Usage

```html
<button id="btn">Click Me</button>

<script>
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  alert("Button clicked!");
});
</script>
```

---

# ✅ 2. Multiple Event Listeners (same element, same event)

Unlike `onclick`, you can attach **multiple listeners**.

```js
btn.addEventListener("click", () => console.log("First listener"));
btn.addEventListener("click", () => console.log("Second listener"));
```

Output when clicked:

```
First listener
Second listener
```

---

# ✅ 3. Removing Event Listeners

Use **`removeEventListener()`**.
⚠️ You must pass the **same reference** to the handler function.

```js
function greet() {
  console.log("Hello!");
}

btn.addEventListener("click", greet);

// later...
btn.removeEventListener("click", greet);
```

---

# ✅ 4. The `event` Object

When an event triggers, the callback gets an **event object** with useful properties.

```js
btn.addEventListener("click", function(e) {
  console.log("Event type:", e.type);     // click
  console.log("Target element:", e.target); // <button>
  console.log("Mouse X:", e.clientX);     // mouse position
});
```

---

# ✅ 5. Event Options (`options` parameter)

Instead of just `true/false`, you can pass an **object**:

```js
element.addEventListener(event, handler, {
  capture: false,
  once: false,
  passive: false
});
```

### 🔹 `capture`

* Default: `false` (event handled in **bubbling** phase).
* If `true`, handled in **capturing** phase.

```js
document.body.addEventListener("click", () => console.log("BODY - Capture"), true);
btn.addEventListener("click", () => console.log("BUTTON - Bubble"), false);

// Clicking button → "BODY - Capture" then "BUTTON - Bubble"
```

---

### 🔹 `once`

* If `true`, listener runs **only once**, then removed automatically.

```js
btn.addEventListener("click", () => console.log("Runs once"), { once: true });
```

---

### 🔹 `passive`

* If `true`, tells browser that handler won’t call `preventDefault()`.
* Improves performance for scroll/touch events.

```js
window.addEventListener("scroll", (e) => {
  console.log("Scrolling...");
  // e.preventDefault(); ❌ not allowed in passive mode
}, { passive: true });
```

---

# ✅ 6. Event Phases (Capture vs Bubble)

Events travel in **3 phases**:

1. **Capturing Phase** (top → target)
2. **Target Phase** (event on actual element)
3. **Bubbling Phase** (target → top)

```html
<div id="outer">
  <button id="inner">Click</button>
</div>

<script>
let outer = document.getElementById("outer");
let inner = document.getElementById("inner");

outer.addEventListener("click", () => console.log("Outer - Capture"), true);
outer.addEventListener("click", () => console.log("Outer - Bubble"), false);
inner.addEventListener("click", () => console.log("Inner"), false);
</script>
```

Click button output:

```
Outer - Capture
Inner
Outer - Bubble
```

---

# ✅ 7. Stop Propagation

* **`e.stopPropagation()`** → stops event from bubbling/capturing further.
* **`e.stopImmediatePropagation()`** → also prevents other listeners on the same element.

```js
inner.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Only Inner, stops bubbling.");
});
```

---

# ✅ 8. Delegated Events (Best Practice)

Instead of attaching listeners to many elements, attach one to a parent and use `event.target`.

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<script>
let list = document.getElementById("list");

list.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});
</script>
```

---

# ✅ 9. Supported Event Types (Examples)

Some common categories:

* **Mouse Events** → `"click"`, `"dblclick"`, `"mousedown"`, `"mouseup"`, `"mousemove"`, `"mouseenter"`, `"mouseleave"`.
* **Keyboard Events** → `"keydown"`, `"keyup"`, `"keypress"`.
* **Form Events** → `"input"`, `"change"`, `"focus"`, `"blur"`, `"submit"`.
* **Document/Window Events** → `"load"`, `"DOMContentLoaded"`, `"resize"`, `"scroll"`.
* **Touch/Pointer Events** → `"touchstart"`, `"touchend"`, `"pointermove"`.

---

# ✅ 10. Full Example with All Features

```html
<button id="btn">Click Me</button>

<script>
let btn = document.getElementById("btn");

function logEvent(e) {
  console.log("Event type:", e.type, "| Target:", e.target);
}

btn.addEventListener("click", logEvent, { once: true, capture: false });
btn.addEventListener("click", () => console.log("Second listener"));

// Try removing first
btn.removeEventListener("click", logEvent);
</script>
```

---

# 🎯 Final Cheat Sheet

| Feature                      | Description                      | Example                            |
| ---------------------------- | -------------------------------- | ---------------------------------- |
| `addEventListener()`         | Attach event                     | `el.addEventListener("click", fn)` |
| Multiple listeners           | Yes                              | Add as many as needed              |
| `removeEventListener()`      | Remove event                     | Needs same function reference      |
| Event Object                 | Info about event                 | `e.type`, `e.target`, `e.clientX`  |
| `capture`                    | Capture vs bubble                | `{capture:true}`                   |
| `once`                       | Runs only once                   | `{once:true}`                      |
| `passive`                    | Improves scroll perf             | `{passive:true}`                   |
| `stopPropagation()`          | Stops bubbling                   | `e.stopPropagation()`              |
| `stopImmediatePropagation()` | Stops bubbling + other listeners |                                    |
| Delegation                   | Efficient handling via parent    | Use `e.target`                     |
