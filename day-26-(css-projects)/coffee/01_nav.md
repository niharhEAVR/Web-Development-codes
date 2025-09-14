### 🔹 **HTML Structure**

```html
<nav>
    <h1 class="logo">logo</h1>
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Menu</a></li>
        <li><a href="">Contact</a></li>
    </ul>
</nav>
```

* `<nav>` → semantic tag for a navigation bar.
* Inside, there are **two main parts**:

  1. `<h1 class="logo">logo</h1>` → the site’s logo/title.
  2. `<ul> ... </ul>` → unordered list containing navigation links (`Home`, `About`, `Menu`, `Contact`).

So structurally, it’s:

```
NAV BAR
 ├── Logo
 └── List of links
```

---

### 🔹 **CSS Styling**

#### 1. Reset + Basics

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background: #100e0f;
}
```

* Removes default browser margins/paddings.
* Sets background color.

---

#### 2. `nav` styling

```css
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  padding-top: 15px;
  margin-bottom: 10px;
}
```

* `display: flex;` → turns the `<nav>` into a flex container.

  * Children (`h1.logo` and `<ul>`) are placed side by side.
* `justify-content: space-around;` → spreads them out evenly across the navbar.
* `align-items: center;` → vertically centers them.
* `color: #fff;` → default text color is white.

This makes the **logo on the left** and the **links on the right**, neatly aligned.

---

#### 3. List styling

```css
li {
  list-style: none; /* removes bullets */
  display: inline-block; /* puts list items horizontally */
  cursor: pointer;
}
```

* Normally `<li>` stacks vertically → `inline-block` makes them sit side by side.

---

#### 4. Links (`<a>`)

```css
li a {
  text-decoration: none; /* removes underline */
  color: #fff;
  font-size: 18px;
  margin-left: 40px; /* spacing between links */
}
```

* White text, no underline, spacing between each link.

---

#### 5. Hover effect

```css
li a:hover {
  color: var(--main-color);
  border-bottom: 2px solid var(--main-color);
}
```

* When you hover, the text changes to the goldish color (`#deab5f`).
* Adds a bottom border → looks like an **underline animation** when you hover.

---

### ✅ Final Result

* Black background.
* White logo on the left, white navigation links spaced evenly on the right.
* Links highlight gold + underline when hovered.




---
---
---


let’s figure out exactly **how much space the `<nav>` is taking** in your website right now.

---

### 1️⃣ By default

Your `<nav>` is a **block-level element**, meaning it automatically takes up **the full width of the page** (100% of the viewport width).

So **horizontally** → the navbar stretches across the entire screen.

---

### 2️⃣ Height of the nav

Let’s check what controls the **height**:

```css
nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #fff;
  padding-top: 15px;
  margin-bottom: 10px;
}
```

* **`padding-top: 15px;`** → adds **15px of space inside** the top of the nav.
* No `padding-bottom` is defined → so bottom padding is **0** (for now).
* **Height is determined by the content** →

  * The tallest element (your `h1.logo` or the `ul`) defines the nav’s height.
  * With default text size, the height will be **something like 40–60px** (depends on font size + padding).

So overall:

* **Width:** 100% of screen.
* **Height:** roughly 50–60px (depends on your text + padding).

---

### 3️⃣ Extra space outside nav

* **`margin-bottom: 10px;`** → after the nav, there’s an extra **10px gap** before the next section starts.

---

✅ In short:

* The navbar is a **full-width horizontal strip** across the top.
* Height is **just enough to fit the logo and links**, plus `15px` padding at the top.
