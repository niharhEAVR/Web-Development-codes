**Selecting elements in DOM (Document Object Model)**.
In JavaScript, DOM selection is how we “grab” HTML elements so we can read, modify, or manipulate them.

There are several ways to select elements in the DOM. Let’s go step by step with **all the main methods**, their explanations, and examples.

---

# 🔹 1. `document.getElementById()`

* Selects **one element** by its unique `id`.
* Returns a **single element object**.

```html
<!DOCTYPE html>
<html>
<body>
  <h1 id="title">Hello World</h1>

  <script>
    let heading = document.getElementById("title");
    console.log(heading.textContent); // "Hello World"
    heading.style.color = "red"; // changes color to red
  </script>
</body>
</html>
```

---

# 🔹 2. `document.getElementsByClassName()`

* Selects **all elements** with the given class.
* Returns an **HTMLCollection** (array-like, but not real array).

```html
<!DOCTYPE html>
<html>
<body>
  <p class="text">Paragraph 1</p>
  <p class="text">Paragraph 2</p>
  <p class="text">Paragraph 3</p>

  <script>
    let paras = document.getElementsByClassName("text");
    console.log(paras.length); // 3
    paras[0].style.color = "blue"; // changes first paragraph to blue
  </script>
</body>
</html>
```

---

# 🔹 3. `document.getElementsByTagName()`

* Selects elements by their **tag name** (`div`, `p`, `h1`, etc).
* Returns an **HTMLCollection**.

```html
<!DOCTYPE html>
<html>
<body>
  <p>One</p>
  <p>Two</p>
  <p>Three</p>

  <script>
    let paras = document.getElementsByTagName("p");
    console.log(paras.length); // 3
    paras[1].style.fontWeight = "bold"; // makes "Two" bold
  </script>
</body>
</html>
```

---

# 🔹 4. `document.querySelector()`

* Selects the **first element** that matches a **CSS selector**.
* Very powerful and flexible.

```html
<!DOCTYPE html>
<html>
<body>
  <div class="box">First Box</div>
  <div class="box">Second Box</div>

  <script>
    let firstBox = document.querySelector(".box"); 
    console.log(firstBox.textContent); // "First Box"
    firstBox.style.background = "yellow"; // highlights only first box
  </script>
</body>
</html>
```

---

# 🔹 5. `document.querySelectorAll()`

* Selects **all elements** matching a CSS selector.
* Returns a **NodeList** (similar to array, supports `forEach`).

```html
<!DOCTYPE html>
<html>
<body>
  <div class="box">Box 1</div>
  <div class="box">Box 2</div>
  <div class="box">Box 3</div>

  <script>
    let boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
      box.style.border = "1px solid black";
    });
  </script>
</body>
</html>
```

---

# 🔹 6. `document.forms`, `document.images`, `document.links`

Special collections for direct access:

* `document.forms` → All `<form>` elements
* `document.images` → All `<img>` elements
* `document.links` → All `<a>` elements with `href`

```html
<!DOCTYPE html>
<html>
<body>
  <form id="myForm"></form>
  <img src="image.jpg" />
  <a href="https://example.com">Example</a>

  <script>
    console.log(document.forms.length); // 1
    console.log(document.images.length); // 1
    console.log(document.links.length);  // 1
  </script>
</body>
</html>
```

---

# 🔹 7. Selecting **Inside an Element**

You can also call these methods **on a specific element**, not just `document`.

```html
<!DOCTYPE html>
<html>
<body>
  <div id="container">
    <p class="msg">Hello</p>
    <p class="msg">World</p>
  </div>

  <script>
    let container = document.getElementById("container");
    let msgs = container.getElementsByClassName("msg");
    console.log(msgs[0].textContent); // "Hello"
  </script>
</body>
</html>
```

---

✅ **Summary Table of DOM Selection Methods**

| Method                     | Returns        | Selects by           | Example                                |
| -------------------------- | -------------- | -------------------- | -------------------------------------- |
| `getElementById()`         | Element        | `id`                 | `document.getElementById("myId")`      |
| `getElementsByClassName()` | HTMLCollection | `class`              | `document.getElementsByClassName("c")` |
| `getElementsByTagName()`   | HTMLCollection | tag name             | `document.getElementsByTagName("p")`   |
| `querySelector()`          | First Element  | CSS selector         | `document.querySelector(".box")`       |
| `querySelectorAll()`       | NodeList       | CSS selector         | `document.querySelectorAll("p.box")`   |
| `forms`, `images`, `links` | HTMLCollection | forms, images, links | `document.forms`                       |