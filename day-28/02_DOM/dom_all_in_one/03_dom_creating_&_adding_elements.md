**DOM element creation & insertion**.
This means: **how to create new elements, set their properties, and add them into the document**.

---

# 🔹 1. `document.createElement(tagName)`

Creates a **new empty element** (not yet added to DOM).

```html
<div id="container"></div>

<script>
  let newDiv = document.createElement("div");
  newDiv.textContent = "I am new here!";
  document.getElementById("container").appendChild(newDiv);
</script>
```

---

# 🔹 2. `document.createTextNode(text)`

Creates a **text node** separately (useful if you want to append raw text).

```html
<div id="container"></div>

<script>
  let textNode = document.createTextNode("Hello World");
  document.getElementById("container").appendChild(textNode);
</script>
```

---

# 🔹 3. `appendChild(node)`

Adds a node as the **last child** of another node.

```js
let list = document.getElementById("container");
let li = document.createElement("li");
li.textContent = "New Item";
list.appendChild(li);
```

---

# 🔹 4. `insertBefore(newNode, referenceNode)`

Inserts a node **before a specific child**.

```js
let list = document.getElementById("container");
let li = document.createElement("li");
li.textContent = "Inserted First";
list.insertBefore(li, list.firstChild);
```

---

# 🔹 5. `append()` (Modern)

* Can add **multiple nodes or strings**.
* Unlike `appendChild()`, it accepts **text** directly.

```js
let box = document.getElementById("container");
box.append("Text added!", document.createElement("span"));
```

---

# 🔹 6. `prepend()` (Modern)

Inserts nodes/text as the **first child**.

```js
let box = document.getElementById("container");
box.prepend("I'm at the top!");
```

---

# 🔹 7. `before()` and `after()`

Insert elements **relative to an element** (sibling level).

```js
let para = document.getElementById("myPara");

let newPara = document.createElement("p");
newPara.textContent = "Inserted before!";
para.before(newPara);

let newPara2 = document.createElement("p");
newPara2.textContent = "Inserted after!";
para.after(newPara2);
```

---

# 🔹 8. `replaceChild(newNode, oldNode)`

Replaces a child node with a new one.

```js
let list = document.getElementById("container");
let li = document.createElement("li");
li.textContent = "Replaced Item";
list.replaceChild(li, list.firstChild);
```

---

# 🔹 9. `removeChild(node)`

Removes a child node.

```js
let list = document.getElementById("container");
list.removeChild(list.lastChild);
```

---

# 🔹 10. `remove()` (Modern)

Directly removes an element itself.

```js
let para = document.getElementById("myPara");
para.remove(); // removes the <p>
```

---

# 🔹 11. `cloneNode(deep)`

Clones a node.

* `false` → shallow clone (only the element, no children).
* `true` → deep clone (element + all children).

```js
let box = document.getElementById("container");
let clone = box.cloneNode(true); // deep copy
document.body.appendChild(clone);
```

---

# 🔹 12. Setting Properties While Creating

### a) `setAttribute(name, value)`

```js
let img = document.createElement("img");
img.setAttribute("src", "pic.jpg");
img.setAttribute("alt", "Picture");
document.body.appendChild(img);
```

### b) Direct property assignment

```js
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Enter name";
document.body.appendChild(input);
```

---

# 🔹 13. `insertAdjacentHTML(position, html)`

Insert HTML directly relative to an element.

Positions:

* `"beforebegin"` → before the element
* `"afterbegin"` → inside element, at start
* `"beforeend"` → inside element, at end
* `"afterend"` → after the element

```html
<div id="box">Hello</div>

<script>
  let box = document.getElementById("box");
  box.insertAdjacentHTML("beforebegin", "<p>Before Box</p>");
  box.insertAdjacentHTML("afterbegin", "<p>Inside Start</p>");
  box.insertAdjacentHTML("beforeend", "<p>Inside End</p>");
  box.insertAdjacentHTML("afterend", "<p>After Box</p>");
</script>
```

---

# ✅ Summary of Creating & Adding Elements in DOM

| Method / Property               | Purpose                            |
| ------------------------------- | ---------------------------------- |
| `createElement(tag)`            | Create new element node            |
| `createTextNode(text)`          | Create text node                   |
| `appendChild(node)`             | Add as last child                  |
| `insertBefore(new, ref)`        | Insert before another node         |
| `append()`                      | Add multiple nodes/strings at end  |
| `prepend()`                     | Add at beginning                   |
| `before()` / `after()`          | Insert before/after element itself |
| `replaceChild(new, old)`        | Replace child                      |
| `removeChild(node)`             | Remove child                       |
| `remove()`                      | Remove element directly            |
| `cloneNode(deep)`               | Clone element (deep or shallow)    |
| `setAttribute(name, value)`     | Add/update attribute               |
| Direct property (`el.id`, etc.) | Set property directly              |
| `insertAdjacentHTML(pos, html)` | Insert HTML relative to element    |

