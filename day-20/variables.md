## 🔹 What are CSS Variables?

CSS variables (also called **CSS custom properties**) are like **placeholders** where you can store values (like colors, fonts, sizes) and reuse them throughout your CSS.

Think of them like a “nickname” for a value.
Instead of writing the same color or size again and again, you define it once and then reuse it.

---

## 🔹 Syntax

1. **Define a variable** → use `--` (two dashes).
2. **Use a variable** → with `var()`.

```css
:root {
  --main-color: blue;
  --font-size: 18px;
}
p {
  color: var(--main-color);
  font-size: var(--font-size);
}
```

---

## 🔹 Example 1: Reusing colors

```css
:root {
  --primary: #3498db;
  --secondary: #2ecc71;
}

button {
  background: var(--primary);
  color: white;
}

button:hover {
  background: var(--secondary);
}
```

✔ Both buttons share consistent colors.

---

## 🔹 Example 2: Variables for spacing

```css
:root {
  --gap: 20px;
}

.container {
  display: flex;
  gap: var(--gap);
  padding: var(--gap);
}
```

✔ If you want to change the gap later, you only edit it **once**.

---

## 🔹 Example 3: Theming

```css
:root {
  --bg: white;
  --text: black;
}
.dark-mode {
  --bg: black;
  --text: white;
}

body {
  background: var(--bg);
  color: var(--text);
}
```

✔ Switching `.dark-mode` changes theme automatically.

---

## 🔹 Features of CSS Variables

✅ **Reusable** → change in one place, apply everywhere.
✅ **Dynamic** → can be updated with JavaScript.
✅ **Scoped** → defined inside an element, it only works for that element and its children.

---

## 🔹 Example 4: Scoped variable

```css
.card {
  --card-color: pink;
  background: var(--card-color);
}
```

✔ Only elements inside `.card` can use `--card-color`.

---

✅ In short:

* CSS variables = reusable custom values.
* Defined with `--name`, used with `var(--name)`.
* Make CSS **cleaner, scalable, and easier to maintain**.
