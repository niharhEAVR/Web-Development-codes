# 🔹 What is DOM?

* **DOM** = **Document Object Model**.
* It is a **tree-like representation** of an HTML (or XML) document.
* The browser converts your HTML page into the **DOM tree**, where every element, attribute, and piece of text becomes a **node**.

👉 JavaScript can then **access, traverse, and manipulate** the DOM to change the web page dynamically.

---

# 🔹 DOM Tree Example

HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Hello DOM</h1>
    <p id="info">This is a paragraph.</p>
  </body>
</html>
```

DOM Tree (simplified):

```
Document
 └── html
      ├── head
      │    └── title
      └── body
           ├── h1
           └── p (id="info")
```

---

# 🔹 Accessing the DOM

The entry point is the global **`document`** object.

Examples:

```js
console.log(document.title);   // "My Page"
console.log(document.body);    // <body>...</body>
console.log(document.URL);     // current page URL
```

---

# 🔹 Main Properties of the DOM

## 1. `document`

Represents the whole webpage.

### Examples:

```js
console.log(document.domain);   // domain name
console.log(document.URL);      // full URL
console.log(document.title);    // title of page
document.title = "New Title";   // change title
```

---

## 2. `document.head`, `document.body`

```js
console.log(document.head);  // <head>...</head>
console.log(document.body);  // <body>...</body>
```

---

## 3. Selecting Elements

* `getElementById(id)`
* `getElementsByClassName(className)`
* `getElementsByTagName(tagName)`
* `querySelector(selector)`
* `querySelectorAll(selector)`

```js
let p = document.getElementById("info");
console.log(p.textContent); // "This is a paragraph."

let h1 = document.querySelector("h1");
h1.style.color = "red";     // changes heading color
```

---

## 4. Node Properties

Every element is a **node** with useful properties:

* `nodeName` → type of node (e.g., `DIV`, `P`)
* `nodeType` → number representing type (1=element, 3=text, 9=document)
* `childNodes` → list of child nodes
* `firstChild`, `lastChild`
* `parentNode`
* `nextSibling`, `previousSibling`

Example:

```js
let p = document.getElementById("info");

console.log(p.nodeName);   // "P"
console.log(p.parentNode); // <body>...</body>
console.log(p.childNodes); // text nodes inside
```

---

## 5. Element Properties

For manipulating content:

* `innerHTML` → gets/sets HTML inside element
* `textContent` → gets/sets text inside element
* `innerText` → visible text (ignores hidden elements)
* `attributes` → list of attributes

Example:

```js
let p = document.getElementById("info");

console.log(p.innerHTML);    // "This is a paragraph."
p.innerHTML = "Updated <b>content</b>"; // inject HTML

console.log(p.textContent);  // "Updated content"
```

---

## 6. Attributes

* `getAttribute(attrName)`
* `setAttribute(attrName, value)`
* `removeAttribute(attrName)`

```js
let p = document.getElementById("info");

console.log(p.getAttribute("id")); // "info"
p.setAttribute("class", "highlight");
p.removeAttribute("id");
```

---

## 7. Style & Class Properties

* `element.style.propertyName` → change CSS
* `classList.add/remove/toggle/contains`

```js
let h1 = document.querySelector("h1");

h1.style.color = "blue";
h1.classList.add("big-title");
h1.classList.toggle("hidden");
```

---

## 8. Creating & Adding Elements

* `document.createElement(tagName)`
* `document.createTextNode(text)`
* `appendChild(node)`
* `append()`
* `prepend()`
* `insertBefore()`

Example:

```js
let newDiv = document.createElement("div");
newDiv.textContent = "Hello, I am new!";
document.body.appendChild(newDiv);
```

---

## 9. Removing Elements

* `removeChild(node)`
* `element.remove()`

```js
let p = document.getElementById("info");
p.remove();   // removes paragraph
```

---

## 10. Events (Part of DOM)

Elements can listen for user actions.

```js
let btn = document.createElement("button");
btn.textContent = "Click Me";
document.body.appendChild(btn);

btn.addEventListener("click", () => {
  alert("Button clicked!");
});
```

---

# 🔹 Summary of DOM Properties & Methods

* `document` (root object)
* `head`, `body`, `title`, `URL`, `domain`
* Node properties: `nodeName`, `parentNode`, `childNodes`
* Element properties: `innerHTML`, `textContent`, `attributes`
* Selection: `getElementById`, `querySelector`, etc.
* Style & class: `style`, `classList`
* DOM manipulation: `createElement`, `appendChild`, `remove`
* Events: `addEventListener`

---

✅ In short:
The **DOM lets JavaScript turn static HTML into interactive, dynamic pages** by reading and modifying elements, attributes, styles, and handling user events.
