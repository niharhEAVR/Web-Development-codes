**Complete explanation of all properties of DOM elements related to**:

1. **Content (what’s inside the element)**
2. **Attributes (things like `id`, `class`, `src`, `href`, etc.)**

Let’s carefully break this down with examples.

---

# 🌐 1. **Content Properties of DOM Elements**

These deal with the text/HTML inside elements.

---

## 🔹 `innerHTML`

* Gets/sets the **HTML inside an element**.
* Parses HTML when setting.

```html
<div id="box"><p>Hello <b>World</b></p></div>

<script>
  let box = document.getElementById("box");
  console.log(box.innerHTML); 
  // "<p>Hello <b>World</b></p>"

  box.innerHTML = "<h2>New Content</h2>"; // replaces inside content
</script>
```

---

## 🔹 `outerHTML`

* Gets/sets the **HTML including the element itself**.

```js
console.log(box.outerHTML); 
// "<div id="box"><h2>New Content</h2></div>"

box.outerHTML = "<section>Replaced Entirely</section>";
```

---

## 🔹 `textContent`

* Gets/sets only **plain text** (no HTML tags).
* Includes hidden text (ignores CSS `display:none`).

```js
console.log(box.textContent); // "New Content"
box.textContent = "Just text now!";
```

---

## 🔹 `innerText`

* Similar to `textContent` but:

  * Respects CSS (ignores hidden text).
  * Triggers reflow (slower).

```html
<div id="test">
  Visible <span style="display:none">Hidden</span>
</div>

<script>
  let t = document.getElementById("test");
  console.log(t.textContent); // "Visible Hidden"
  console.log(t.innerText);   // "Visible"
</script>
```

---

## 🔹 `nodeValue`

* Returns/sets text for **text nodes** only, not elements.
* Rarely used directly (use `textContent` instead).

```js
let textNode = document.getElementById("test").firstChild;
console.log(textNode.nodeValue); // "Visible "
```

---

## 🔹 `data`

* Similar to `nodeValue` but used on **Text/Comment nodes**.

```html
<p id="p">Hello</p>
<script>
  let textNode = document.getElementById("p").firstChild;
  console.log(textNode.data); // "Hello"
</script>
```

---

## 🔹 `contentEditable`

* Makes any element editable (like a mini text editor).

```html
<div id="editable" contenteditable="true">Edit me!</div>
```

---

# 🌐 2. **Attribute Properties of DOM Elements**

Attributes are the properties inside an HTML tag. Example:

```html
<img src="cat.jpg" alt="Cat" id="pic" class="img-responsive">
```

---

## 🔹 `id`

* Gets/sets the unique ID of an element.

```js
let img = document.getElementById("pic");
console.log(img.id); // "pic"
img.id = "newPic";
```

---

## 🔹 `className`

* Returns/sets all classes as a string.

```js
console.log(img.className); // "img-responsive"
img.className = "rounded shadow";
```

---

## 🔹 `classList`

* Powerful way to work with classes individually.
* Methods:

  * `.add("class")`
  * `.remove("class")`
  * `.toggle("class")`
  * `.contains("class")`

```js
img.classList.add("active");
img.classList.remove("img-responsive");
console.log(img.classList.contains("active")); // true
```

---

## 🔹 `attributes`

* Returns a **NamedNodeMap** of all attributes.

```js
for (let attr of img.attributes) {
  console.log(attr.name, "=", attr.value);
}
// src = cat.jpg
// alt = Cat
// id = newPic
```

---

## 🔹 `getAttribute(name)`

Gets an attribute value.

```js
console.log(img.getAttribute("src")); // "cat.jpg"
```

---

## 🔹 `setAttribute(name, value)`

Sets or updates an attribute.

```js
img.setAttribute("alt", "Cute Cat");
```

---

## 🔹 `removeAttribute(name)`

Removes an attribute.

```js
img.removeAttribute("class");
```

---

## 🔹 `hasAttribute(name)`

Checks if attribute exists.

```js
console.log(img.hasAttribute("src")); // true
```

---

## 🔹 `dataset`

* Used to access custom `data-*` attributes.

```html
<button id="btn" data-user="harsh" data-id="42">Click</button>

<script>
  let btn = document.getElementById("btn");
  console.log(btn.dataset.user); // "harsh"
  console.log(btn.dataset.id);   // "42"
  btn.dataset.role = "admin";    // adds data-role="admin"
</script>
```

---

# ✅ Final Summary (Cheat Sheet)

### 📌 Content Properties

| Property          | Description                         |
| ----------------- | ----------------------------------- |
| `innerHTML`       | HTML inside element                 |
| `outerHTML`       | HTML including element itself       |
| `textContent`     | All text (ignores CSS)              |
| `innerText`       | Visible text only (respects CSS)    |
| `nodeValue`       | Text node value                     |
| `data`            | Alias for `nodeValue` on text nodes |
| `contentEditable` | Makes element editable              |

### 📌 Attribute Properties

| Property            | Description                          |
| ------------------- | ------------------------------------ |
| `id`                | Element ID                           |
| `className`         | All classes as string                |
| `classList`         | Methods to add/remove/toggle classes |
| `attributes`        | All attributes as NamedNodeMap       |
| `getAttribute()`    | Get attribute value                  |
| `setAttribute()`    | Set/update attribute                 |
| `removeAttribute()` | Remove attribute                     |
| `hasAttribute()`    | Check attribute exists               |
| `dataset`           | Access `data-*` custom attributes    |
