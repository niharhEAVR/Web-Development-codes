**DOM Node properties**.
Every element in the DOM (tags, text, comments, attributes) is a **Node**.

Each Node has a set of **properties** you can use to explore or manipulate the DOM tree.

---

# 🔹 1. `nodeType`

Returns the type of the node as a number:

* `1` → Element node (`<div>`)
* `3` → Text node
* `8` → Comment
* `9` → Document

```html
<div id="box">Hello</div>

<script>
  let box = document.getElementById("box");
  console.log(box.nodeType); // 1 (element node)
  console.log(box.firstChild.nodeType); // 3 (text node "Hello")
</script>
```

---

# 🔹 2. `nodeName`

Returns the name of the node:

* For elements → Tag name (`DIV`, `P`)
* For text → `#text`
* For comments → `#comment`

```html
<p id="para">Hi</p>

<script>
  let p = document.getElementById("para");
  console.log(p.nodeName);           // "P"
  console.log(p.firstChild.nodeName); // "#text"
</script>
```

---

# 🔹 3. `nodeValue`

* Returns or sets the value of a node.
* Usually works for **text** and **comment** nodes, not for element nodes.

```html
<p id="para">Hello</p>

<script>
  let textNode = document.getElementById("para").firstChild;
  console.log(textNode.nodeValue); // "Hello"
  textNode.nodeValue = "Hi there!"; // changes text
</script>
```

---

# 🔹 4. `parentNode`

Returns the **parent** of a node.

```html
<div id="container">
  <p id="child">Hello</p>
</div>

<script>
  let child = document.getElementById("child");
  console.log(child.parentNode.id); // "container"
</script>
```

---

# 🔹 5. `childNodes`

Returns a **NodeList** of all child nodes (elements, text, comments).

```html
<ul id="list">
  <li>One</li>
  <li>Two</li>
</ul>

<script>
  let list = document.getElementById("list");
  console.log(list.childNodes); // Includes <li> elements AND text nodes (like spaces/newlines)
</script>
```

---

# 🔹 6. `firstChild` / `lastChild`

Return the **first/last child node** (could be a text node).

```html
<ul id="list">
  <li>One</li>
  <li>Two</li>
</ul>

<script>
  let list = document.getElementById("list");
  console.log(list.firstChild); // May be a text node (newline)
  console.log(list.lastChild);  // <li>Two</li>
</script>
```

---

# 🔹 7. `nextSibling` / `previousSibling`

Return the **next or previous sibling node** (including text nodes).

```html
<ul>
  <li id="item1">One</li>
  <li id="item2">Two</li>
</ul>

<script>
  let item1 = document.getElementById("item1");
  console.log(item1.nextSibling); // could be text node (newline)
  console.log(item1.nextSibling.nextSibling); // <li id="item2">Two</li>
</script>
```

---

# 🔹 8. `textContent`

Gets or sets the **text content** of a node and its children.

```html
<div id="box">
  <p>Hello <span>World</span></p>
</div>

<script>
  let box = document.getElementById("box");
  console.log(box.textContent); // "Hello World"
  box.textContent = "Changed!";
</script>
```

---

# 🔹 9. `innerHTML`

Gets or sets the **HTML content** of an element (not just text).

```html
<div id="box">
  <p>Hello <span>World</span></p>
</div>

<script>
  let box = document.getElementById("box");
  console.log(box.innerHTML); // "<p>Hello <span>World</span></p>"
  box.innerHTML = "<b>Changed!</b>";
</script>
```

---

# 🔹 10. `outerHTML`

Gets/sets the **HTML including the element itself**.

```html
<div id="box"><p>Hello</p></div>

<script>
  let box = document.getElementById("box");
  console.log(box.outerHTML); // "<div id="box"><p>Hello</p></div>"
  box.outerHTML = "<section>New Content</section>"; // replaces <div> with <section>
</script>
```

---

# 🔹 11. `attributes`

Returns a **NamedNodeMap** of all attributes of an element.

```html
<p id="para" class="text">Hello</p>

<script>
  let para = document.getElementById("para");
  console.log(para.attributes["class"].value); // "text"
</script>
```

---

# 🔹 12. `hasChildNodes()`

Checks if a node has children.

```js
let box = document.getElementById("box");
console.log(box.hasChildNodes()); // true if it has children
```

---

# ✅ Summary Table of Important Node Properties

| Property          | Description                            | Example                     |
| ----------------- | -------------------------------------- | --------------------------- |
| `nodeType`        | Type of node (1=element, 3=text, etc.) | `el.nodeType`               |
| `nodeName`        | Name of node (`DIV`, `#text`, etc.)    | `el.nodeName`               |
| `nodeValue`       | Value of text/comment nodes            | `textNode.nodeValue`        |
| `parentNode`      | Parent of the node                     | `el.parentNode`             |
| `childNodes`      | All child nodes                        | `el.childNodes`             |
| `firstChild`      | First child node                       | `el.firstChild`             |
| `lastChild`       | Last child node                        | `el.lastChild`              |
| `nextSibling`     | Next sibling node                      | `el.nextSibling`            |
| `previousSibling` | Previous sibling node                  | `el.previousSibling`        |
| `textContent`     | Only text (no HTML)                    | `el.textContent`            |
| `innerHTML`       | HTML inside element                    | `el.innerHTML`              |
| `outerHTML`       | HTML including element itself          | `el.outerHTML`              |
| `attributes`      | Attributes collection                  | `el.attributes["id"].value` |
| `hasChildNodes()` | Checks for child nodes                 | `el.hasChildNodes()`        |

---
---

# 🌳 1. Difference Reminder: `Node` vs `Element`

* **Node** → Everything in the DOM (elements, text, comments, document, attributes).
* **Element** → Only the HTML tags (`<div>`, `<p>`, `<ul>`, etc.).

That’s why we have **Node properties** (generic) and **Element properties** (more specific, practical for HTML).

---

# 🔹 A. Node Properties (Already Covered ✅)

Quick recap:

* `nodeType`, `nodeName`, `nodeValue`
* `parentNode`
* `childNodes`
* `firstChild`, `lastChild`
* `nextSibling`, `previousSibling`
* `textContent`
* `innerHTML`, `outerHTML`
* `attributes`
* `hasChildNodes()`

---

# 🔹 B. Element-Only Properties

These **skip text nodes** and only work with actual HTML tags.

---

## 1. `children`

* Returns **HTMLCollection** of only child elements (no text, no comments).

```html
<div id="box">
  <p>One</p>
  <p>Two</p>
</div>

<script>
  let box = document.getElementById("box");
  console.log(box.children.length); // 2
  console.log(box.children[0].tagName); // "P"
</script>
```

---

## 2. `firstElementChild` / `lastElementChild`

* Like `firstChild` / `lastChild` but only elements.

```js
console.log(box.firstElementChild.textContent); // "One"
console.log(box.lastElementChild.textContent);  // "Two"
```

---

## 3. `nextElementSibling` / `previousElementSibling`

* Like `nextSibling` / `previousSibling` but skip text nodes.

```html
<ul>
  <li id="item1">One</li>
  <li id="item2">Two</li>
</ul>

<script>
  let item1 = document.getElementById("item1");
  console.log(item1.nextElementSibling.textContent); // "Two"
</script>
```

---

## 4. `childElementCount`

* Returns **number of child elements** (same as `children.length`).

```js
console.log(box.childElementCount); // 2
```

---

## 5. `className` / `classList`

* `className` → returns or sets all classes as a string.
* `classList` → allows adding/removing/toggling classes easily.

```html
<p id="para" class="text bold">Hello</p>

<script>
  let para = document.getElementById("para");

  console.log(para.className); // "text bold"

  para.classList.add("highlight");     // add class
  para.classList.remove("bold");       // remove class
  para.classList.toggle("active");     // toggle class
  console.log(para.classList.contains("text")); // true
</script>
```

---

## 6. `id`

* Gets/sets the `id` of an element.

```js
para.id = "newId";
console.log(para.id); // "newId"
```

---

## 7. `tagName`

* Returns the tag name of the element in UPPERCASE.

```js
console.log(para.tagName); // "P"
```

---

## 8. `style`

* Access and change inline CSS styles.

```js
para.style.color = "red";
para.style.fontSize = "20px";
```

---

## 9. `dataset`

* Access custom `data-*` attributes.

```html
<button id="btn" data-user="Harsh" data-id="42">Click</button>

<script>
  let btn = document.getElementById("btn");
  console.log(btn.dataset.user); // "Harsh"
  console.log(btn.dataset.id);   // "42"
</script>
```

---

## 10. `innerText`

* Similar to `textContent` but:

  * `textContent` → returns all text, even hidden by CSS.
  * `innerText` → respects CSS (ignores hidden text).

```html
<div id="box">
  <p>Hello <span style="display:none">World</span></p>
</div>

<script>
  let box = document.getElementById("box");
  console.log(box.textContent); // "Hello World"
  console.log(box.innerText);   // "Hello"
</script>
```

---

# 🔹 C. Useful Methods with Elements (Related to Properties)

(Not properties but used **a lot** with DOM nodes)

1. `getAttribute(name)` / `setAttribute(name, value)`

   ```js
   console.log(para.getAttribute("class")); // "text bold"
   para.setAttribute("title", "tooltip");
   ```

2. `removeAttribute(name)`

   ```js
   para.removeAttribute("class");
   ```

3. `hasAttribute(name)`

   ```js
   console.log(para.hasAttribute("id")); // true
   ```

---

# ✅ Final Summary

### 📌 Node Properties (all nodes)

* `nodeType`, `nodeName`, `nodeValue`
* `parentNode`
* `childNodes`
* `firstChild`, `lastChild`
* `nextSibling`, `previousSibling`
* `textContent`
* `innerHTML`, `outerHTML`
* `attributes`
* `hasChildNodes()`

### 📌 Element-Specific Properties

* `children`
* `firstElementChild`, `lastElementChild`
* `nextElementSibling`, `previousElementSibling`
* `childElementCount`
* `className`, `classList`
* `id`
* `tagName`
* `style`
* `dataset`
* `innerText`
